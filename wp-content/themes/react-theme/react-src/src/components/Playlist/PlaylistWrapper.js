import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Entries from './Entries/Entries';
import './Playlist.styles.css';

import { Button, Modal, Form } from 'react-bootstrap';
import CloseIcon from '@material-ui/icons/Close';

import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import TourStatus from './TourStatus';


// copy tour function for the "copy tour" inside dropdown
async function copyTour(title, date, visibility, stops) {
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
    str += "<h2>Visibility:";
    str += visibility;
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


const PlaylistWrapper = props => {   
    const { playlist } = props;

    // for copy tour
    const { id, name, date, author, visibility, entries } = playlist;
    const [show, setShow] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [tourTitle, setTourTitle] = useState(name + " Copy");
    const [tourVilisibity, setTourVilisibity] = useState(visibility);
    const [tourDate, setTourDate] = useState(date);

    // TODO: save the new id somewhere else in library/my tour component
    const [newTourId, setNewTourId] = useState(-1);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleShowDelete = () => setShowDelete(true);
    const handleCloseDelete = () => setShowDelete(false);

    const handleCopy = (title, date, visibility, stops, event) => {
        console.log(stops);
        if (!title || title.length === 0)
        {
            console.log("Empty tour name is not allowed");
            return;
        }
        // create new 
        copyTour(title, date, visibility, stops).then((id) => {
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

    const gotoEdit = () => {
        props.changeToEditMode();
        props.history.push(`/tour/${id}`);
    }

    const gotoView = () => {
        props.changeToViewMode();
        props.history.push(`/tour/${id}`);
    }


    //for delete tour
    async function deleteTour() {
        const response = await fetch('/wp-json/wp/v2/tour/' + playlist.id, {
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
        window.location.reload();
    }


    const handleDelete = () => {
        deleteTour();
    }

            
	return (
        <div key={playlist.id} className="public-playlist">
            <div className="title-container">
                <span className="tour-title" onClick={gotoView}>{playlist.name}</span>
                   
                <DropdownButton
                    title=""
                    id="dropdown-menu-align-right"
                    menuAlign="right"
                    >
                    <Dropdown.Item onClick={gotoView}>VIEW ALL</Dropdown.Item>
                    <Dropdown.Item onClick={handleShow}><div className="copy-tour-icon-img" style={{'width':'18px', 'height':'20px'}}></div> COPY THIS TOUR</Dropdown.Item>

                    {/* copy tour popup */}
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

                    

                    {
                        (visibility === 'public' || author[0] === reactInit.userId) ?
                            <Dropdown.Item onClick={gotoEdit}><div className="edit-tour-icon-img" style={{'width':'18px', 'height':'20px'}}></div> EDIT THIS TOUR</Dropdown.Item> : ""
                    }

                    {
                        author[0] === reactInit.userId ?
                            <Dropdown.Item className="delete-tour" onClick={handleShowDelete}> <div className="delete-tour-icon-img" style={{'width':'18px', 'height':'20px'}}></div> DELETE THIS TOUR</Dropdown.Item> : ""
                    }

                    {/* delete tour popup */}
                    <Modal show={showDelete} onHide={handleCloseDelete} aria-labelledby="contained-modal-title-vcenter" centered>
                        <Modal.Header closeButton={false}>
                            <Modal.Title>ARE YOU SURE?</Modal.Title>
                            <CloseIcon onClick={handleCloseDelete} className="overlay-close-icon" />
                        </Modal.Header>
                        <Modal.Body className="show-grid">
                        <div className='container'>
                             <p>Your're about to delete <span>{playlist.name.toUpperCase()}</span> and you won't be able to revert this. Are you sure?</p>
                        </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button id="delete-tour-confirm" onClick={handleDelete}>
                                YES, DELETE
                            </Button>
                            <Button variant="primary" onClick={handleCloseDelete}>
                            NO, GO BACK
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </DropdownButton>
            </div>
            <TourStatus visibility={visibility} date={date} username={author[1]}/>
            <Entries listId={playlist.id} entries={playlist.entries}/>
        </div>
	);
};

export default withRouter(PlaylistWrapper);