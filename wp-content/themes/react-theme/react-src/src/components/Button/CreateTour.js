import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import './CreateTour.styles.css'

async function createTour(title, date) {
    const data = {
      "title": title,
      "status": "publish",
      "content": "<h2>TourDate:" + date + "</h2>"
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

function CreateTour(props) {
    const [show, setShow] = useState(false);
    const [tourTitle, setTourTitle] = useState("");
    const [isPrivate, setPrivate] = useState(true);
    const [tourDate, setTourDate] = useState("");

    // TODO: save the new id somewhere else in library/my tour component
    const [newTourId, setNewTourId] = useState(-1);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCreate = (title, date, event) => {
      // TODO: validate
      if (!title || title.length === 0)
      {
        console.log("Empty tour name is not allowed");
        return;
      }
      // create new 
      createTour(title, date).then((id) => {
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
        <Button variant="primary" onClick={handleShow} id='create-button'>
          Create a New Tour
        </Button>
  
        <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title>Create a New Tour</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>

            <Form.Group>
                <Form.Label>Tour Name</Form.Label>
                <Form.Control type="text" onChange={event => setTourTitle(event.target.value)} />
                {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>

            <Form.Group>
                <Form.Label>Tour Date</Form.Label>
                <Form.Control type="date" onChange={event => setTourDate(event.target.value)}/>
            </Form.Group>

            <Form.Group>

                <Form.Label>Tour Visibility</Form.Label>
                <Form.Check type='radio' id='default-radio' label='Public' name='tourTypeRadio' />
                <Form.Check type='radio' label='Private' id='disabled-default-radio' name='tourTypeRadio' />

            </Form.Group>
            {/* <Button variant="primary" type="submit">
                Submit
            </Button> */}

            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={handleCreate.bind(this, tourTitle, tourDate)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default withRouter(CreateTour);

