import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import './CreateTour.styles.css'

import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';

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
        props.props.setEditMode(true);
        props.history.push(`/tour/${id}`);
      });      
    };
  
    return (
      <>
          <div id="create-button-area"><Button variant="primary" onClick={handleShow} id='create-button'>
            <AddIcon id="add-icon"/> CREATE A NEW TOUR
          </Button></div>
  
        <Modal show={show} onHide={handleClose} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton={false}>
            <Modal.Title>Create a New Tour</Modal.Title>
            <CloseIcon onClick={handleClose} className="overlay-close-icon" />
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={(event) => {
              event.preventDefault();
              handleCreate.bind(this, tourTitle, tourDate, event)}}>

            <Form.Group>
                <Form.Label>Tour Name</Form.Label>
                <Form.Control className="create-tour-input" type="text" onChange={event => setTourTitle(event.target.value)} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Tour Date</Form.Label>
                <Form.Control className="create-tour-input" type="date" onChange={event => setTourDate(event.target.value)}/>
            </Form.Group>
            <input type="submit" style={{display: 'none'}} />
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button type="submit" variant="primary" onClick={handleCreate.bind(this, tourTitle, tourDate)}>
              Create
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default withRouter(CreateTour);

