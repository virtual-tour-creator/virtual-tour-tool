import React from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

import Navbar from '../Navbar/Navbar';
import Jumbotron from '../Jumbotron/Jumbotron';
import AddStop from './AddStop'
import StopBoxList from './CurrentStops'
import MediaCard from './MediaCard'

import arrayMove from 'array-move';

import './TourPage.styles.css'


class TourPage extends React.Component {
    constructor(props) {
        super(props);
        //initial state
        this.state = {
            'id': props.match.params.tourId,
            'name': '',
            'visibility': 'public',
            'date': '',
            'stops': [],
            'mode': 'view',
            'showDeleteConfirmation': false
        };
        this.handleRemoveStop = this.handleRemoveStop.bind(this);
    }
    
    parseContent(content) {
        let info = {
            'stopIds': [],
            'tourDate': ""
        };
        let res = content.match(/<li>\d+<\/li>/gm);
        let stops = res ? res.map(item => {
            let idStr = item.slice(4, -5)
            return parseInt(idStr);
        }) : [];
        info.stopIds = stops;
        res = content.match(/<h2>.+<\/h2>/gm);
        let date = res ? res[0].slice(4, -5).split(":")[1] : "";
        info.tourDate = date;
        return info;
    }

    componentDidMount() {
        let time =  new Date().getTime();
        fetch('/wp-json/wp/v2/tour/' + this.state.id)
        .then(res => res.json())
        .then((data) => {
            // console.log(data);
            const { id, title, content } = data;
            let parsedContent = this.parseContent(content.rendered);
            console.log(parsedContent);
            this.setState({
                'name': title.rendered,
                'date': parsedContent.tourDate
            });
            // Get all stop details
            const allRequests = parsedContent.stopIds.map(tourId => 
                {   
                    return fetch('/wp-json/wp/v2/stop/' + tourId +'?timestamp=' + time)
                            .then(res => res.json())
                            .then(data => { 
                                const { id, thumbnail_url, title } = data;
                                const stop = {
                                    "id": id,
                                    "thumbnailUrl": thumbnail_url,
                                    "name": title.rendered,
                                };
                                return stop;
                            });
                }            
            );
            // wait for all requests to finish
            return Promise.all(allRequests);
        })
        .then(allStops => {
            this.setState({
                'stops': allStops
            });
        });
    }
       
    async deleteTour() {
        const response = await fetch('/wp-json/wp/v2/tour/' + this.state.id, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'X-WP-Nonce': reactInit.nonce
            },
        });

        if(!response.ok) {
            console.log(response);
        }
        const tour = await response.json();
        this.props.history.push(`/`);
    }

    getContentString() {
        let str = "<ol>";

        const { stops, date } = this.state;
        stops.map(stop => {
            const { id } = stop;
            str += "<li>";
            str += id.toString();
            str += "</li>"
        });
        str += "</ol>"
        str += "<h2>TourDate:";
        str += date;
        str += "</h2>";
        return str;
    }

    async updateTour(content) {
        const { name, stops, id} = this.state;
        const data = {
            "title": name,
            "content": content
        };
        const response = await fetch('/wp-json/wp/v2/tour/' + id, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'X-WP-Nonce': reactInit.nonce
            },
            body: JSON.stringify(data)
        });

        if(!response.ok) {
            console.log(response);
        }
        const tour = await response.json();
        console.log(tour);
    }

    //////////Edit vs. View mode///////////

    //toggling editing mode
    handleEditing() {
        if(this.state.mode === 'edit') {
            const content = this.getContentString();
            this.updateTour(content).then(() => {
                // show notice after update is done?
                //toggle editing mode
            });
            this.setState({'mode': 'view'});
            document.getElementById('update-stop-button').innerHTML = "<i class='fas fa-unlock-alt'></i>" + '    EDIT THIS TOUR';
        } if(this.state.mode === 'view') {
            this.setState({'mode': 'edit'});
            document.getElementById('update-stop-button').innerHTML = "<i class='fas fa-check'></i>" + '  DONE EDITING';
        }
        
    }

    renderTourInfo() {
        if(this.state.mode === 'edit') {
            return(
                <Form>
                <Form.Group>
                    <Form.Label className="form-label">Tour Name</Form.Label>
                    <Form.Control className="info-form" type="text" value={this.state.name} onChange={e => this.setState({name: e.target.value})}/>
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group>
                    <Form.Label className="form-label">Tour Date</Form.Label>
                    <Form.Control className="info-form" type="date" value={this.state.date} onChange={e => this.setState({date: e.target.value})}/>
                </Form.Group>

                <Form.Group>

                    <Form.Label>Tour Visibility</Form.Label>
                    <Form.Check type='radio' id='default-radio' label='Public' name='tourTypeRadio' />
                    <Form.Check type='radio' label='Private' id='disabled-default-radio' name='tourTypeRadio' />

                </Form.Group>
    
                </Form>
            )
            
        } if (this.state.mode === 'view') {
            return(
                <div>
                    <div><span id='tour-name'>{this.state.name}</span> <span id='tour-date'>{this.state.date}</span> </div> 
                </div>
            )
        }
    }

    renderTourStops() {
        if(this.state.mode === 'edit') {
            return(
                <div>
                    <AddStop onSelectStops={this.handleAddedStops} />
                    <div id='tour-stops'>
                    {/* draggable stop boxes */}
                    <StopBoxList 
                        stops={this.state.stops} 
                        onRemoveStop={this.handleRemoveStop}
                        onSortEnd={this.onSortEnd}
                        onSwapLeft = {this.onSwapLeft}
                        onSwapRight = {this.onSwapRight}
                        axis='xy'/>
                    </div>
                </div>
                
                
            )
        } if(this.state.mode === 'view') {
            return(

                <div className='cards'>
                    {this.state.stops.map(singleStop => (
                        <MediaCard stop={singleStop} onClick={() => this.props.history.push(`/entry/${singleStop.id}`)}/>
                    ))}
                </div>
            )
        }
    }

    renderDeleteConfirmation() {

        return (
            <Modal show={this.state.showDeleteConfirmation} onHide={() => this.setState({showDeleteConfirmation:false})} aria-labelledby="example-custom-modal-styling-title">
                <Modal.Header closeButton>
                  <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                <div className='container'>
                    <p>Are you sure about deleting this tour?</p>
                </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={this.deleteTour.bind(this)} id='delete-stop-button'  className='tour-page-button'>
                    <i className="fas fa-trash-alt"></i> DELETE
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }

    handleDelete() {
        // confirmation overlay
        this.setState({showDeleteConfirmation: true});
    }


    handleAddedStops = (selectedStops) => {
        let joined = this.state.stops.concat(selectedStops);
        this.setState({'stops':joined});
    }

    handleRemoveStop = (index) => {
        let stops = this.state.stops;
        // splice will operate directly on stops and return removed stops
        stops.splice(index, 1);
        this.setState({
            'stops': stops
        })
    }

    onSortEnd = ({oldIndex, newIndex}) => {
        const newArray = arrayMove(this.state.stops, oldIndex, newIndex);
        this.setState({
            'stops': newArray
        })
      }

    //on-click swapping
    onSwapLeft = (index) => {
        if(index > 0){
            const newArray = arrayMove(this.state.stops, index, index-1);
            this.setState({
                'stops': newArray
            })
        }
    }

    onSwapRight = (index) => {
        if(index < this.state.stops.length){
            const newArray = arrayMove(this.state.stops, index, index+1);
            this.setState({
                'stops': newArray
            })
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron />

                <div id='tour-page'>
                    <Button variant="primary" onClick={this.handleEditing.bind(this)} id='update-stop-button' className='tour-page-button'>
                    <i className='fas fa-unlock-alt'></i>   EDIT THIS TOUR
                    </Button>
                    <Button variant="primary" onClick={this.handleDelete.bind(this)} id='delete-stop-button'  className='tour-page-button'>
                    <i className="fas fa-trash-alt"></i> DELETE TOUR
                    </Button>

                    <div id='tour-info-form'>
                        {this.renderTourInfo()}
                    </div>
                    
                
                    <br></br>

                    {this.renderTourStops()}
                    {this.renderDeleteConfirmation()}
                </div>
                
                
            </div>
        )
    }
    
}


export default TourPage;