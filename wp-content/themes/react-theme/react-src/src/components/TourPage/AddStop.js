import React from 'react';
import { Button, Modal } from 'react-bootstrap';

import CloseIcon from '@material-ui/icons/Close';

import StopCard from './StopCard'
import './TourPage.styles.css'
import './SelectableCard.scss';


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
          thumbnailUrl,
          name
          // selected
        } = cardContent;
        var selected = this.state.selected.indexOf(i) > -1;
        return (
          <StopCard key={i} 
            stop={stop}
            thumbnailUrl={thumbnailUrl} name={name}
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
            <button className="card" onClick={(e) => this.submit() }>
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
            backendStops: []
        }
    }
    

    // const [show, setShow] = useState(false);

    componentDidMount() {
      let time =  new Date().getTime();
      fetch('/wp-json/wp/v2/stop?timestamp=' + time)
      .then(res => res.json())
      .then((data) => {
          // console.log(data);
          let allStopsInfo = data.map((stop) => {
              const {id, thumbnail_url, title} = stop;
              let stopInfo = {
                'id': id,
                'thumbnailUrl': thumbnail_url,
                'name': title.rendered
              };
              return stopInfo
          });
          this.setState({ backendStops: allStopsInfo });
      });
    }

    handleShow = () => this.setState({show: true})

    handleStops = (selectedStops) => {
        this.props.onSelectStops(selectedStops);
        this.setState({show:false});
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
        
              <Modal show={this.state.show} onHide={() => this.setState({show:false})} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton={false}>
                  <Modal.Title>Add Stop(s)</Modal.Title>
                  <CloseIcon onClick={() => this.setState({show:false})} className="overlay-close-icon" />
                </Modal.Header>
                 
                <Modal.Body className="show-grid">
                <div>
                  <StopCardListSelection stops={backendStops} onSelectStops={this.handleStops} />
                </div>
                </Modal.Body>
      
              </Modal>
            </>
          );
    }
    
  }

  export default AddStop;