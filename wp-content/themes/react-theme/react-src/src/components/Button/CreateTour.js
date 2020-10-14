import React, { useState } from 'react';
// or less ideally
import { Button, Modal, Form } from 'react-bootstrap';
import './CreateTour.styles.css'

function CreateTour() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
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
                <Form.Control type="text" />
                {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>

            <Form.Group>
                <Form.Label>Tour Date</Form.Label>
                <Form.Control type="date" />
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
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default CreateTour;

