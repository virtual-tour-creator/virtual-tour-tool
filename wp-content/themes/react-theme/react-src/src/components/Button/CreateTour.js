import React, { useState } from 'react';
// or less ideally
import { Button, Modal, Form } from 'react-bootstrap';
import './CreateTour.styles.css'

async function createTour(title, setNewTourId) {
    const data = {
      "title": title,
      "status": "publish"
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
        return;
    }

    const tour = await response.json();
    setNewTourId(tour.id);
    console.log(tour);
}

function CreateTour() {
    const [show, setShow] = useState(false);
    const [tourTitle, setTourTitle] = useState("");
    const [isPrivate, setPrivate] = useState(true);
    const [tourDate, setTourDate] = useState("");

    // TODO: save the new id somewhere else in library/my tour component
    const [newTourId, setNewTourId] = useState(-1);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCreate = (title, event) => {
      // TODO: validate
      if (!title || title.length === 0)
      {
        console.log("Empty tour name is not allowed");
        return;
      }
      // create new 
      createTour(title, setNewTourId);
      setShow(false);
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
            <Button variant="primary" onClick={handleCreate.bind(this, tourTitle)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default CreateTour;

