import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import CloseIcon from '@material-ui/icons/Close';

import './CreateTour.styles.css';


async function copyTour(title, date, stops) {
    let str = "<ol>";
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

    const data = {
      "title": title,
      "status": "publish",
      "content": str
    };

    const response = await fetch('/wp-json/wp/v2/tour/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-WP-Nonce': reactInit.nonce
        },
        body: JSON.stringify(data)
    });

    if(!response.ok) {
        console.log(response);
        return -1;
    }

    const tour = await response.json();
    return tour.id;
}

function CopyTour(props) {
  
    const { id, name, date, entries } = props.props;
    const [show, setShow] = useState(false);
    const [tourTitle, setTourTitle] = useState(name + " Copy");
    const [isPrivate, setPrivate] = useState(true);
    const [tourDate, setTourDate] = useState(date);

    // TODO: save the new id somewhere else in library/my tour component
    const [newTourId, setNewTourId] = useState(-1);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCopy = (title, date, stops, event) => {
        console.log(stops);
        if (!title || title.length === 0)
        {
          console.log("Empty tour name is not allowed");
          return;
        }
        // create new 
        copyTour(title, date, stops).then((id) => {
          setShow(false);
          // TODO: check created id 
          if (id == -1)
          {
            return;
          }
          // redirect
          window.location.reload();
        });   
    };

    return (
      <>
          <Typography onClick={handleShow}>
            COPY THIS TOUR
          </Typography>

          <Modal show={show} onHide={handleClose} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton={false}>
            <Modal.Title>Copy This Tour</Modal.Title>
            <CloseIcon onClick={handleClose} className="overlay-close-icon" />
          </Modal.Header>

          <Modal.Body>
            <Form>

            <Form.Group>
                <Form.Label>Tour Name</Form.Label>
                <Form.Control className="create-tour-input" type="text" value={tourTitle} onChange={event => setTourTitle(event.target.value)} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Tour Date</Form.Label>
                <Form.Control className="create-tour-input" type="date" value={tourDate} onChange={event => setTourDate(event.target.value)}/>
            </Form.Group>

            <Form.Group>

                <Form.Label>Tour Edit Is</Form.Label>
                <div className="radio-button-container">
                  <Form.Check type='radio' id='default-radio' label='COMPLETE' name='tourTypeRadio' variant="dark" />
                  <Form.Check type='radio' label='INCOMPLETE' id='default-radio' name='tourTypeRadio' />
                </div>
                

            </Form.Group>
            {/* <Button variant="primary" type="submit">
                Submit
            </Button> */}

            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={handleCopy.bind(this, tourTitle, tourDate, entries)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        </>
      );
  }

  export default withRouter(CopyTour);

