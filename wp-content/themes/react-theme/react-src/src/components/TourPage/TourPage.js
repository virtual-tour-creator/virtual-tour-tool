import React from 'react';
import { Form, Button } from 'react-bootstrap';

import Navbar from '../Navbar/Navbar';
import Jumbotron from '../Jumbotron/Jumbotron';
import AddStop from './AddStop'
import StopBoxList from './CurrentStops'

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
    }

    getContentString() {
        let str = "<ol>"

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
            document.getElementById('update-stop-button').innerHTML = 'Edit this tour';
        } if(this.state.mode === 'view') {
            this.setState({'mode': 'edit'});
            document.getElementById('update-stop-button').innerHTML = 'Done Editing';
        }
        
    }

    renderTourInfo() {
        if(this.state.mode === 'edit') {
            return(
                <Form>
                <Form.Group>
                    <Form.Label>Tour Name</Form.Label>
                    <Form.Control type="text" value={this.state.name} onChange={e => this.setState({name: e.target.value})}/>
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group>
                    <Form.Label>Tour Date</Form.Label>
                    <Form.Control type="date" value={this.state.date} onChange={e => this.setState({date: e.target.value})}/>
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
                    <h1>{this.state.name}</h1> <p>{this.state.date}</p>
                </div>
            )
        }
    }

    renderTourStops() {
        if(this.state.mode === 'edit') {
            return(
                <div id='tour-stops'>
                    {/* draggable stop boxes */}
                    <StopBoxList 
                        stops={this.state.stops} 
                        onRemoveStop={this.handleRemoveStop}
                        onSortEnd={this.onSortEnd}
                        axis='xy'/>
                    <AddStop onSelectStops={this.handleAddedStops} />
                </div>
                
            )
        } if(this.state.mode === 'view') {
            return(
                <div id='view-stop-box-list'>
                    {this.state.stops.map(singleStop => (
                        <div className="view-stop-box">
                            <img alt='stop' src={singleStop.thumbnailUrl} />
                            <p> {singleStop.name} </p>
                        </div>
                    ))}
                </div>
            )
        }
    }





    handleDelete() {
        // confirmation overlay?
        this.deleteTour().then(() => {
            // TODO: back to library/my tours
            console.log("this tour is deleted");
        });
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

    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron />
    
                <div id='tour-info-form'>
                    {this.renderTourInfo()}
                </div>
                <Button variant="primary" onClick={this.handleDelete.bind(this)} id='delete-stop-button'>
                  Delete Tour
                </Button>
                <Button variant="primary" onClick={this.handleEditing.bind(this)} id='update-stop-button'>
                  Edit this tour
                </Button>
                <br></br>

                {this.renderTourStops()}
                
            </div>
        )
    }
    
}


export default TourPage;