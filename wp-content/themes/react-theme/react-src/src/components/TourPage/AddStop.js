import React from 'react';
import { Button, Modal } from 'react-bootstrap';

import CloseIcon from '@material-ui/icons/Close';

import StopCard from './StopCard'
import './TourPage.styles.css'
import './SelectableCard.scss';
import { RestAPIGetStopsByPage } from '../../helpers/RestAPIHelper.js';
import Pagination from 'react-bootstrap/Pagination'

import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';


class StopCardList extends React.Component {

    constructor(props) {
      super(props);
      var selected = [];
      var initialState = {
        selected: selected
      };
      this.state = initialState;
    }
  
    onItemSelected(index) {
      this.setState((prevState, props) => {
        var selectedIndexes = prevState.selected;
        var selectedIndex = selectedIndexes.indexOf(index);
        if (selectedIndex > -1) {
            selectedIndexes.splice(selectedIndex, 1);
            props.onChange(selectedIndexes);
        } else {
            selectedIndexes.push(index);
            props.onChange(selectedIndexes);
        }
        return {
        selected: selectedIndexes
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
        var selected = this.state.selected.indexOf(i) > -1;
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
    
    onListChanged(selected) {
      this.setState({
        selected: this.getSelectedStops(selected)
      });
    }

    getSelectedStops(selectedIndexes) {
        const selectedStops = selectedIndexes.map(index =>
            this.props.stops[index]);

        return selectedStops;
    }

    submit() {
      this.props.onSelectStops(this.state.selected);
    }
    render() {
      return (
        <div className="column">
            <StopCardList 
              stops={this.props.stops}
              onChange={this.onListChanged.bind(this)}/>
            <button onClick={(e) => this.submit() }>
              Add
            </button>
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
            stopPerPage: 8
        }
    }
    

    // const [show, setShow] = useState(false);

    componentDidMount() {
      let time =  new Date().getTime();
      const { stopPerPage } = this.state;
      RestAPIGetStopsByPage(stopPerPage, 1, time, this.handleRestAPIResult)
    }

    handleRestAPIResult = (data, pageNum) => {
      let allStopsInfo = data.map((stop) => {
              const {id, thumbnail_url, medium_url, title} = stop;
              let stopInfo = {
                'id': id,
                'thumbnailUrl': thumbnail_url,
                'medium_url': medium_url,
                'name': title.rendered
              };
              return stopInfo
          });
      this.setState({ backendStops: allStopsInfo, pageNum: pageNum});
    }

    handleShow = () => this.setState({show: true})

    handleStops = (selectedStops) => {
        this.props.onSelectStops(selectedStops);
        this.setState({show:false});
    }

    handleChangePage = (e) => {
      const text = e.target.getAttribute('value');
      const nextPageIdx = parseInt(text);
      if (nextPageIdx) {
        const { stopPerPage } = this.state;
        let time =  new Date().getTime();
        RestAPIGetStopsByPage(stopPerPage, nextPageIdx, time, this.handleRestAPIResult)
        this.setState({currentPage: nextPageIdx});
      }
    }

    renderPagination() {
      const { pageNum, currentPage } = this.state;
      let items = [];
      for (let number = 1; number <= pageNum; number++) {
        items.push(
          <Pagination.Item key={number} value={number} active={number === currentPage}>
            {number}
          </Pagination.Item>,
        );
      }
      return (
        <div>
          <Pagination onClick={this.handleChangePage.bind(this)}>{items}</Pagination>
        </div>);
    }

    // const stopsToAdd = backendStops.map(singleStop =>
    //     <div className='stop'>
    //         <StopCard>
    //             <img alt='stop' src={singleStop.thumbnailUrl} />
    //             <p> {singleStop.name} </p>
    //         </StopCard>
    //     </div>)
    
    render() {
        const { backendStops } = this.state;

        return (
            <>
              <Button className='tour-page-button' variant="primary" onClick={this.handleShow} id='add-stop-button'>
                <i className="fas fa-plus"></i>  Add Stop(s)
              </Button>
        
              <Modal id="add-stop-modal" show={this.state.show} onHide={() => this.setState({show:false})} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header id="add-stop-modal-header" closeButton={false}>
                  <Modal.Title id="add-stop-modal-title">Add Stop(s) <span className="selected-stops-count">Selected Stops: 2</span></Modal.Title>
                
                  <div className='add-stop-search'>
                    <InputBase
                      placeholder="Search tour topic here..."
                      className="add-stop-search-input"
                      inputProps={{ 'aria-label': 'search' }}
                    />
                    <div className='search-icon'>
                      <SearchIcon />
                    </div>
                  </div>

                  <CloseIcon onClick={() => this.setState({show:false})} className="overlay-close-icon" id="add-stop-close-icon" />

                  <button className="btn-primary" id="add-stop-done-button">DONE</button>

                </Modal.Header>
                 
                <Modal.Body className="show-grid">
                <div>   
                  <StopCardListSelection stops={backendStops} onSelectStops={this.handleStops} />
                </div>
                </Modal.Body>
                <Modal.Footer>
                  {this.renderPagination()}
                </Modal.Footer>
              </Modal>
            </>
          );
    }
    
  }

  export default AddStop;