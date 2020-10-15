import React from 'react';
import { Form, Button } from 'react-bootstrap';

import Navbar from '../Navbar/Navbar';
import Jumbotron from '../Jumbotron/Jumbotron';
import AddStop from './AddStop'

import './TourPage.styles.css'

class TourPage extends React.Component {
    constructor(props) {
        super(props);
        //to be populated!
        this.state = {
            'id': props.match.params.tourId,
            'name': 'Matisse in the Cone Wing',
            'visibility': 'public',
            'date': '',
            'stops': []
        };
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

    handleAddedStops = (selectedStops) => {
        let joined = this.state.stops.concat(selectedStops);
        this.setState({'stops':joined});
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

    handleDoneEditing() {
        const content = this.getContentString();
        this.updateTour(content).then(() => {
            // show notice after update is done?
        });
    }

    handleDelete() {
        // confirmation overlay?
        this.deleteTour().then(() => {
            // TODO: back to library/my tours
            console.log("this tour is deleted");
        });
    }

    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron />
    
                <div id='tour-info-form'>
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
                </div>
                <Button variant="primary" onClick={this.handleDelete.bind(this)} id='delete-stop-button'>
                  Delete Tour
                </Button>
                <Button variant="primary" onClick={this.handleDoneEditing.bind(this)} id='update-stop-button'>
                  Done
                </Button>
                <AddStop onSelectStops={this.handleAddedStops} />
                <br></br>
                <h1>Current Stops:</h1>
                {this.state.stops.map(singleStop =>
                    <div className='stop'>
                        <img alt='stop' src={singleStop.thumbnailUrl} />
                        <p> {singleStop.name} </p>
                    </div>)}
                
            </div>
        )
    }
    
}


export default TourPage;