import React from 'react';
import { Form } from 'react-bootstrap';

import Navbar from '../Navbar/Navbar';
import Jumbotron from '../Jumbotron/Jumbotron';
import AddStop from './AddStop'

import './TourPage.styles.css'

class TourPage extends React.Component {
    constructor() {
        super();
        //to be populated!
        this.state = {
            'id': 1,
            'name': 'Matisse in the Cone Wing',
            'visibility': 'public',
            'date': '',
            'stops': []
        };
    }
    

    handleAddedStops = (selectedStops) => {
        let joined = this.state.stops.concat(selectedStops);
        this.setState({'stops':joined});
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
                        <Form.Control type="text" value={this.state.name} />
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>
    
                    <Form.Group>
                        <Form.Label>Tour Date</Form.Label>
                        <Form.Control type="date" value={this.state.date} />
                    </Form.Group>
    
                    <Form.Group>
    
                        <Form.Label>Tour Visibility</Form.Label>
                        <Form.Check type='radio' id='default-radio' label='Public' name='tourTypeRadio' />
                        <Form.Check type='radio' label='Private' id='disabled-default-radio' name='tourTypeRadio' />
    
                    </Form.Group>
    
                    </Form>
                </div>
    
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