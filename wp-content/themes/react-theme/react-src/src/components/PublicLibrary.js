import React from 'react';
import Navbar from './Navbar/Navbar';
import Jumbotron from './Jumbotron/Jumbotron';
import Playlist from './Playlist/Playlist';
import CreateTour from './Button/CreateTour';


class PublicLibrary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlists: []
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
            .then(res => res.json())
            .then(data => { 
                // console.log(entry);
                const { id, thumbnail_url, title, medium_url } = data;
                const e = {
                    id,
                    thumbnail_url,
                    medium_url,
                    name: title.rendered,
                };
                return e;
            });
    };

    componentDidMount() {
        let time =  new Date().getTime();
        fetch('/wp-json/wp/v2/tour?timestamp=' + time)
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            let tourInfo = data.map((tour) => {
                const {id, title, content, author} = tour;

                return {id, name: title.rendered, author,
                    date: this.parseContentStopDate(content.rendered), 
                    visibility: this.parseContentStopVisibility(content.rendered),
                    entries: this.parseContentStopId(content.rendered)};
            });
            // console.log(playlistInfo);
            return tourInfo;
        })
        .then((tourInfo) => {
            // get stop per tour

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

            // wait for all requests to finish
            return Promise.all(allRequests).then((stopData) => {
                    stopData.map(stop => {
                        const { id }  = stop;
                        stopDic[id] = stop;
                    });
                    return tourInfo.map(tour => 
                    {
                        const { id, name, author, date, visibility, entries } = tour;
                        let newStopInfo = entries.map(stopId => {
                            return stopDic[stopId];
                        });
                        return {id, name, date, author, visibility, entries: newStopInfo};    
                    }); 
                });
        })
        .then((finalInfo) => {
            console.log(finalInfo);
            this.setState({ playlists: finalInfo });
        })
        .catch(console.log);

        
    }


    render() { 
        return (
            <div className="public-library">
                <Navbar />
                <Jumbotron />
                <div><CreateTour props={this.props}/></div>
                <Playlist props={this.props} playlists={this.state.playlists} />
            </div>
        )
    }
}

export default PublicLibrary;