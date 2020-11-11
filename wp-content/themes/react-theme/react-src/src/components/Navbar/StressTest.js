import React, { useState } from 'react';
import { Button, Modal, Form, Row } from 'react-bootstrap';
import { RestAPICreateTour } from '../../helpers/RestAPIHelper.js';

const generateTour = (num, stopStr, setText) => {

    const enteredStops = [];
    stopStr.split(',').map(block => {
        const id = parseInt(block);
        if (isNaN(id)) return;
        enteredStops.push(id);
    });

    const stops = [];
    for (let i = 0; i < enteredStops.length; i++) {
        stops.push({id: enteredStops[i]});
    }

    const title = "Stress Test - ";
    // RestAPICreateTour(title, "", "public", stops)
    const allRequests = [];
    for (let i = 1; i <= num; i++) {
        allRequests.push(RestAPICreateTour(title + i, "", "public", stops));
    }
    setText("Wait");
    Promise.all(allRequests).then((newTourIds) => {
        console.log(newTourIds);
        setText("Done, refresh page");
    });
}

const StressTest = () => {
    
    const [num, setNum] = useState(100);
    const [text, setText] = useState("Generate");
    const [stopText, setStopText] = useState("0,0,0,0,0");

    return(
        <div className='d-flex flex-row'>
            <Form>
                <Form.Label>Tour # {num}</Form.Label>
                <Form.Control type="range" value={num} onChange={e => setNum(e.target.value)}/>
            </Form>
            <Form>
                <Form.Label>Stop ids (seperate by ,)</Form.Label>
                <Form.Control type="text" value={stopText} onChange={e => setStopText(e.target.value)}/>
            </Form>
            <Button className="btn-primary" id="button" disabled={text !== "Generate"} onClick={generateTour.bind(this, num, stopText, setText)} >{text}</Button>
        </div>
    );
}
export default StressTest;