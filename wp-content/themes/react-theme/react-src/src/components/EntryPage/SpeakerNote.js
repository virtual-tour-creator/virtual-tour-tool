import React, { useState } from 'react';

import EditIcon from '../../images/edit.png'

import { Button, Form, Col } from 'react-bootstrap';
import './SpeakerNote.styles.css';



const SpeakerNote = ({description, tags, id, caption}) => {
    const [searchStr, setSearchStr] = useState("");

    const getMediaSearchLink = () => {
        if (searchStr === '') return "";
        return reactInit.searchMediaUrl + encodeURI(searchStr);
    };

    return(
        <div id="speaker-note-container">
        <ul className="speaker-note-nav nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
                <a className="speaker-note-nav nav-link active" id="home-tab" data-toggle="tab" href="#caption" role="tab" aria-controls="home" aria-selected="true">CAPTION</a>
            </li>
            <li className="nav-item">
                <a className="speaker-note-nav nav-link" id="profile-tab" data-toggle="tab" href="#description" role="tab" aria-controls="profile" aria-selected="false">STOP DESCRIPTION</a>
            </li>
            <li className="nav-item">
                <a className="speaker-note-nav nav-link" id="contact-tab" data-toggle="tab" href="#misc" role="tab" aria-controls="contact" aria-selected="false">MISC</a>
            </li>
            </ul>
            <div className="tab-content" id="myTabContent">
            
            <div className="tab-pane fade show active" id="caption" role="tabpanel" aria-labelledby="home-tab">
                {caption}
            </div>


            <div className="tab-pane fade" id="description" role="tabpanel" aria-labelledby="profile-tab">
                {description}
                <div>
                    Search related tags: 
                    <div>{tags}</div>
                    
                </div>
                </div>
            <div className="tab-pane fade" id="misc" role="tabpanel" aria-labelledby="contact-tab">
            <div className="media-search-bar">
                <span>Search Media Files: </span>
                <Form>
                <Form.Row>
                    <Col>
                        <Form.Control placeholder="Search Media" onChange={event => setSearchStr(event.target.value)}/>
                    </Col>
                    <Col>
                    <Button variant="primary" href={getMediaSearchLink()}>
                        Search
                    </Button>
                    </Col>
                        
                </Form.Row>
                </Form>
                <Button className="tour-page-button presentation-edit-button" href={reactInit.adminUrl + 'post.php?post=' + id + '&action=edit'} target="_blank">
                    <img src={EditIcon} />Edit this Stop
                </Button>
            </div>
            </div>
            </div>
        </div>
    )
}

export default SpeakerNote;