import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import CloseIcon from '@material-ui/icons/Close';

import './CreateTour.styles.css';
import { RestAPICreateTour } from '../../helpers/RestAPIHelper.js';

function CopyTour(props) {
  
    const { id, name, date, visibility, entries } = props;
    const [show, setShow] = useState(false);
    const [tourTitle, setTourTitle] = useState(name + " Copy");
    const [tourVilisibity, setTourVilisibity] = useState(visibility);
    const [tourDate, setTourDate] = useState(date);

    // TODO: save the new id somewhere else in library/my tour component
    const [newTourId, setNewTourId] = useState(-1);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCopy = (title, date, visibility, stops, event) => {
        // console.log(stops);
        if (!title || title.length === 0)
        {
            console.log("Empty tour name is not allowed");
            return;
        }
        // create new 
        RestAPICreateTour(title, date, visibility, stops).then((id) => {
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
                <Form.Label>Tour Visibility</Form.Label> <br></br>
                <Form.Check type='radio' id='default-radio' value='private' label='COMPLETE' name='tourTypeRadio' checked={tourVilisibity === 'private'} onChange={event => setTourVilisibity(event.target.value)}/>
                <Form.Check type='radio' label='INCOMPLETE' value='public' id='disabled-default-radio' name='tourTypeRadio' checked={tourVilisibity === 'public'} onChange={event => setTourVilisibity(event.target.value)}/>
            </Form.Group>

            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={handleCopy.bind(this, tourTitle, tourDate, tourVilisibity, entries)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        </>
      );
  }

  export default withRouter(CopyTour);

