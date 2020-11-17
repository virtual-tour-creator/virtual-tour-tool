import React from 'react';
import Navbar from './Navbar/Navbar';
import Jumbotron from './Jumbotron/Jumbotron';
import Playlist from './Playlist/Playlist';
import CreateTour from './Button/CreateTour';
import Pagination from './TourPage/Pagination';
import unescape from '../helpers/unescape';
import { RestAPIGetTourByPage, RestAPIGetTourByAuthorId } from '../helpers/RestAPIHelper.js';

class PublicLibrary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlists: [],
            totalPageNum: 1,
            currentPage: 1,
            maxPerPage: 5,
          };
    }

    parseContentStopId(content) {
        let res = content.match(/<li>\d+<\/li>/gm);
        let stops = res ? res.map(item => {
            let idStr = item.slice(4, -5)
            return parseInt(idStr);
        }) : [];
        return stops;
    }

    parseContentStopDate(content) {
        let res = content.match(/<h2>TourDate:.+<\/h2>/gm);
        let date = res ? res[0].slice(4, -5).split(":")[1] : "";
        return date;
    }

    parseContentStopVisibility(content) {
        let res = content.match(/<h2>Visibility:.+<\/h2>/gm);
        let status = res ? res[0].slice(4, -5).split(":")[1] : "public";
        return status;
    }

    getStopInfo = (id) => {
        let time =  new Date().getTime();
        return fetch('/wp-json/wp/v2/stop/' + id +'?timestamp=' + time)
            .then(res => {
                return res.ok && res.json ? res.json() : { id: -1 };
            })
            .then(data => { 
                const { id, thumbnail_url, title, medium_url } = data;
                // invalid stop
                if (id === -1) {
                    return { id };
                }
                const e = {
                    id,
                    thumbnail_url,
                    medium_url,
                    name: unescape(title.rendered),
                };
                return e;
            });
    };

    getAllStopsInTours(data, totalPageNum) {
        let tourInfo = data.map((tour) => {
            const {id, title, content, author} = tour;

            return {id, name: unescape(title.rendered), author,
                date: this.parseContentStopDate(content.rendered), 
                visibility: this.parseContentStopVisibility(content.rendered),
                entries: this.parseContentStopId(content.rendered)};
        });

        let stopDic = {};
        tourInfo.map(tour => 
        {
            const { entries } = tour;
            entries.map(stop => {
                if (!stopDic[stop])
                {
                    stopDic[stop] = {};
                }
            });    
        });

        const allRequests = [];
        for (var stopId in stopDic)
        {
            allRequests.push(this.getStopInfo(stopId));
        }

        Promise.all(allRequests).then((stopData) => {
            stopData.map(stop => {
                const { id }  = stop;
                if (id !== -1)
                    stopDic[id] = stop;
            });
            const finalInfo = tourInfo.map(tour => 
            {
                const { id, name, author, date, visibility, entries } = tour;
                let newStopInfo = entries.filter(stopId => {
                    return stopDic[stopId].hasOwnProperty('id');
                })
                .map(stopId => {
                    return stopDic[stopId];
                });
                return {id, name, date, author, visibility, entries: newStopInfo};    
            }); 
            this.setState({ playlists: finalInfo, totalPageNum: totalPageNum});
        }).catch(console.log("Get stops in tour failed"));
    }

    componentDidMount() {
        const { totalPageNum, currentPage, maxPerPage} = this.state;
        let time =  new Date().getTime();
        if (this.props.authorOnly) {
            RestAPIGetTourByAuthorId(reactInit.userId, maxPerPage, currentPage, time, this.getAllStopsInTours.bind(this)); 
        } 
        else {
            RestAPIGetTourByPage(maxPerPage, currentPage, time, this.getAllStopsInTours.bind(this)); 
        }       
    }

    componentDidUpdate(prevProps) {
      if (this.props.authorOnly !== prevProps.authorOnly) {
        const { totalPageNum, currentPage, maxPerPage} = this.state;
        let time =  new Date().getTime();
        if (this.props.authorOnly) {
            RestAPIGetTourByAuthorId(reactInit.userId, maxPerPage, 1, time, this.getAllStopsInTours.bind(this)); 
        } 
        else {
            RestAPIGetTourByPage(maxPerPage, 1, time, this.getAllStopsInTours.bind(this)); 
        }
        this.setState({currentPage: 1});
      }
    }

    handlePrevPage() {
        const { maxPerPage, currentPage } = this.state;
        let time =  new Date().getTime();
        if(currentPage > 1) {
            const nextPageIdx = parseInt(currentPage) - 1;
            RestAPIGetTourByPage(maxPerPage, nextPageIdx, time, this.getAllStopsInTours.bind(this));
            this.setState({currentPage: nextPageIdx});
        }
    }

    handleNextPage() {
        const { maxPerPage, totalPageNum, currentPage } = this.state;
        let time =  new Date().getTime();
        // TO FIX: last page break the page (early return?)
        if(currentPage < totalPageNum) {
            const nextPageIdx = parseInt(currentPage) + 1;
            console.log("next page:", nextPageIdx);
            RestAPIGetTourByPage(maxPerPage, nextPageIdx, time, this.getAllStopsInTours.bind(this));
            this.setState({currentPage: nextPageIdx}); 
        }
    }

    renderPagination() {
      const { totalPageNum, currentPage } = this.state;
      return (
        <div>
          <Pagination pageNum={totalPageNum} currentPage={currentPage} handlePrevPage={this.handlePrevPage.bind(this)} handleNextPage={this.handleNextPage.bind(this)} />
        </div>);
    }

    render() { 
        const { authorOnly, setAuthorOnly, history } = this.props;
        return (
            <div className="public-library">
                <Navbar history={history} authorOnly={authorOnly} setAuthorOnly={setAuthorOnly}/>
                <Jumbotron />
                <div><CreateTour props={this.props}/></div>
                <Playlist props={this.props} playlists={this.state.playlists} />
                {this.renderPagination()}
            </div>
        )
    }
}

export default PublicLibrary;