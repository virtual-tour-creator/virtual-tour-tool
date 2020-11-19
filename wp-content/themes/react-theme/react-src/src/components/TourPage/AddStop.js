import React from 'react';
import { Button, Modal } from 'react-bootstrap';

import CloseIcon from '@material-ui/icons/Close';

import StopCard from './StopCard'
import './TourPage.styles.css';
import './AddStop.styles.css';
import './SelectableCard.scss';
import { RestAPIGetStopsByPage, RestAPIGetStopsBySearch } from '../../helpers/RestAPIHelper.js';
import Pagination from './Pagination';

import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import NoResult from '../../images/no-result-sad-face.png';
import AddStopIcon from '../../images/add-stop.png';

import unescape from '../../helpers/unescape';


class StopCardList extends React.Component {

    constructor(props) {
      super(props);
      const { selected } = props;
      this.state = {
        selected: selected
      };
    }
  
    componentDidUpdate(prevProps) {
      const { selected } = this.props;
      if (prevProps.selected !== selected)
        this.setState({selected: selected});
    }

    onItemSelected(index) {
      this.setState((prevState, props) => {
        // pass changing index
        props.onChange(index);
        const { selected } = props;
        selected[index] = !prevState.selected[index];
        return {
          selected: selected
        };
      });
    }
  
    render() {
      var {stops} = this.props;
  
      var stop = stops.map((cardContent, i) => {
        var {
          medium_url,
          name
          // selected
        } = cardContent;
        var selected = this.state.selected[i];
        return (
          <StopCard key={i} 
            stop={stop}
            medium_url={medium_url} name={name}
            selected={selected} 
            onClick={(e) => this.onItemSelected(i)} />
        );
      });
      return (<div className="stop-card-list">{stop}</div>);
    }
  }
 
  
class StopCardListSelection extends React.Component {
    
    constructor(props) {
      super(props);
      const { preSelectedStops } = props;
      this.state = {

      };
    }

    onListChanged(selectedStopIdx) {
      const { stops, onSelectStop } = this.props;
      onSelectStop(stops[selectedStopIdx]);    
    }

    render() {
      const { preSelectedStops } = this.props;
      return (
        <div className="column">
            <StopCardList 
              selected={preSelectedStops}
              stops={this.props.stops}
              onChange={this.onListChanged.bind(this)}/>
            {/* <button onClick={(e) => this.submit() }>
              Add
            </button> */}
        </div>);
    }
  }


class AddStop extends React.Component {
    constructor(props) {
        super();
        this.state = {
            show: false,
            backendStops: [],
            pageNum: 1,
            currentPage: 1,
            stopPerPage: 8,
            selectedStops: new Map(),
            searchKeyword: "",
        }
    }
    
    // const [show, setShow] = useState(false);

    componentDidMount() {
      let time =  new Date().getTime();
      const { stopPerPage } = this.state;
      RestAPIGetStopsByPage(stopPerPage, 1, time, this.handleRestAPIResult)
    }

    getPreSelectedStopStatus = () => {
      const { backendStops, selectedStops } = this.state;
      const status = backendStops.map(stop => {
        const { id } = stop;
        return selectedStops.has(id);
      });
      return status;
    }

    handleRestAPIResult = (data, pageNum) => {
      let allStopsInfo = data.map((stop) => {
              const {id, thumbnail_url, medium_url, title} = stop;
              let stopInfo = {
                'id': id,
                'thumbnailUrl': thumbnail_url,
                'medium_url': medium_url,
                'name': unescape(title.rendered)
              };
              return stopInfo
          });
      this.setState({ backendStops: allStopsInfo, pageNum: pageNum});
    }

    handleShow = () => {
      this.handleChangePage(1);
      this.setState({show: true});
    }

    handleStopToggle = (stop) => {
        // called everytime select/unselect a stop card
        const { id } = stop;
        const { selectedStops } = this.state;
        if (selectedStops.has(id)) {
          // unselect stop id
          selectedStops.delete(id);
        } else {
          // select stop id
          selectedStops.set(id, stop);
        }
        this.setState({selectedStops: selectedStops});
        console.log(stop);
    }

    handleDoneAddingStops = () => {
      const { selectedStops } = this.state;
      let stops = [];
      for (const stop of selectedStops.values()) {
          stops.push(stop);
      }
      this.props.onSelectStops(stops);
      selectedStops.clear();
      // close overlay
      this.setState({show:false, searchKeyword: ""});
    }

    handleSearchByKeyword = (e) => {
        const keyword = e.target.value;
        const { stopPerPage } = this.state;
        let time =  new Date().getTime();
        if (keyword === "" || keyword.trim() === "") {
          RestAPIGetStopsByPage(stopPerPage, 1, time, this.handleRestAPIResult);
        }
        else {
          RestAPIGetStopsBySearch(keyword.trim(), stopPerPage, 1, time, this.handleRestAPIResult);
        }   
        this.setState({currentPage: 1, searchKeyword: keyword.trim()});     
    }

    handleChangePage = (nextPageIdx) => {
        const { stopPerPage, searchKeyword } = this.state;
        let time =  new Date().getTime();
        if (searchKeyword === "") {
          RestAPIGetStopsByPage(stopPerPage, nextPageIdx, time, this.handleRestAPIResult);
        }
        else {
          RestAPIGetStopsBySearch(searchKeyword, stopPerPage, nextPageIdx, time, this.handleRestAPIResult);
        }
        this.setState({currentPage: nextPageIdx});
      }

    handlePrevPage() {
      const { currentPage } = this.state;
      if(currentPage > 1){
        const nextPageIdx = parseInt(currentPage) - 1;
        this.handleChangePage(nextPageIdx);
      }
    }

    handleNextPage() {
      const { pageNum, currentPage } = this.state;
      if(currentPage < pageNum){
        const nextPageIdx = parseInt(currentPage) + 1;
        console.log("next page:", nextPageIdx);
        this.handleChangePage(nextPageIdx);   
      }
    }

    renderPagination() {
      const { pageNum, currentPage } = this.state;
      return (
        <div>
          {/* <Pagination onClick={this.handleChangePage.bind(this)}>{items}</Pagination> */}
          <Pagination pageNum={pageNum} currentPage={currentPage} handlePrevPage={this.handlePrevPage.bind(this)} handleNextPage={this.handleNextPage.bind(this)} />
        </div>);
    }

    renderModalBody() {
      const { backendStops } = this.state;

      if(backendStops.length === 0) {
        return (
          <div className="no-result-notification">
            <img id="cute-no-result-face" src={NoResult} />
            <p id="no-result-first-line">Sorry we can't find any stops matching your search!</p>
            <p id="no-result-second-line">Please try another search.</p>
          </div>
        )
      }
      
      return (
        <>
          <Modal.Body className="show-grid">
              <div>   
                 <StopCardListSelection preSelectedStops={this.getPreSelectedStopStatus()} stops={backendStops} onSelectStop={this.handleStopToggle} />
              </div>
          </Modal.Body>
          <Modal.Footer>
              {this.renderPagination()}
          </Modal.Footer>
        </>
        
      )
    }
    
    render() {
       
        return (
            <>
              <Button className='tour-page-button' variant="primary" onClick={this.handleShow} id='add-stop-button'>
                <img src={AddStopIcon} style={{'width':'18px', 'height':'20px','marginBottom': '5px'}}/>  Add Stop(s)
              </Button>
        
              <Modal id="add-stop-modal" show={this.state.show} onHide={() => this.setState({show:false})} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header id="add-stop-modal-header" closeButton={false}>
                  <Modal.Title id="add-stop-modal-title">Add Stop(s) <span className="selected-stops-count">Selected Stops: {this.state.selectedStops.size}</span></Modal.Title>
                
                  <div className='add-stop-search'>
                    <InputBase
                      placeholder="Search tour topic here..."
                      className="add-stop-search-input"
                      inputProps={{ 'aria-label': 'search' }}
                      type='text'
                      onChange={this.handleSearchByKeyword.bind(this)}
                    />
                    <div className='search-icon'>
                      <SearchIcon />
                    </div>
                  </div>

                  <CloseIcon onClick={() => this.setState({show:false})} className="overlay-close-icon" id="add-stop-close-icon" />

                  <button className="btn-primary" id="add-stop-done-button" onClick={this.handleDoneAddingStops.bind(this)} >DONE</button>

                </Modal.Header>
                 
                {this.renderModalBody()}
                
                
              </Modal>
            </>
          );
    }
    
  }

  export default AddStop;