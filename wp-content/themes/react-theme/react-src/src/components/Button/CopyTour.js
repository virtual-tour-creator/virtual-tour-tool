import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
// import './CopyTour.styles.css';


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
    const handleCreate = (title, date, stops, event) => {
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
          props.history.push(`/tour/${id}`);
        });   
    };

    return (
      <>
          <Button variant="primary" onClick={handleShow} id='copy-button'>
            COPY THIS TOUR
          </Button>

          <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title>Copy and Create a New Tour</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>

            <Form.Group>
                <Form.Label>Tour Name</Form.Label>
                <Form.Control type="text" value={tourTitle} onChange={event => setTourTitle(event.target.value)} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Tour Date</Form.Label>
                <Form.Control type="date" value={tourDate} onChange={event => setTourDate(event.target.value)}/>
            </Form.Group>

            <Form.Group>

                <Form.Label>Tour Visibility</Form.Label>
                <Form.Check type='radio' id='default-radio' label='In Progress' name='tourTypeRadio' />
                <Form.Check type='radio' label='Ready to Present' id='disabled-default-radio' name='tourTypeRadio' />

            </Form.Group>
            {/* <Button variant="primary" type="submit">
                Submit
            </Button> */}

            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={handleCreate.bind(this, tourTitle, tourDate, entries)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        </>
      );
  }

  export default withRouter(CopyTour);

