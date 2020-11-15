import React, { useEffect, useState } from 'react';
import './EntryPage.styles.css';

import ImageGallery from 'react-image-gallery';

import 'react-bnb-gallery/dist/style.css'
import Collapsible from 'react-collapsible';
import CloseIcon from '@material-ui/icons/Close';
import { Button, Modal, Form, Col, Row } from 'react-bootstrap';
import { RestAPIGetStopById } from '../../helpers/RestAPIHelper.js';

const getContent = entry => {
    if (entry.content) 
        return (
            <div dangerouslySetInnerHTML={{ __html: entry.content.rendered }} />
        );
}

const _renderVideo = item => {
    return (
        <div className='video-wrapper'>
            <iframe
              src={item.embedUrl}
              frameBorder='0'
              allowFullScreen
            >
            </iframe>
        </div>     
    );
}

const EntryPage = props => {
    let id = props.match.params.entryId;
    let time =  new Date().getTime();
    const [searchStr, setSearchStr] = useState("");
    const [entry, setEntry] = useState([]);
    useEffect(() => {
        RestAPIGetStopById(id, time, setEntry);
    })

    const getMediaSearchLink = () => {
        if (searchStr === '') return "";
        return reactInit.searchMediaUrl + encodeURI(searchStr);
    };

    // load media
    let Photos = [];
    if (entry.acf_media)
    {
        Photos = entry.acf_media.map((media) => {
            const { type, thumbnail_url, full_url } = media;
            if (type === "video") {
                let video = {
                    embedUrl: full_url,
                    description: '',
                    renderItem: _renderVideo,
                    thumbnail: 'https://picsum.photos/150/150',
                    original: ''
                };
                return video;
            }
            if (type === "audio") {
                let audio = {
                    embedUrl: full_url,
                    description: '',
                    renderItem: _renderVideo,
                    thumbnail: 'https://picsum.photos/150/150',
                    original: ''
                };
                return audio;
            }
            let photo = {};
            photo['original'] = media.full_url;
            photo['thumbnail'] = media.thumbnail_url;
            photo['description'] = media.title;
            return photo;
        });
    }

    // console.log(Photos);

    // load tags
    let tag_lists = "None"
    if (entry.tag_names)
    {
        tag_lists = entry.tag_names.map((tag) =>
            <li><a href={reactInit.searchStopTagUrl + tag[1]}>#{tag[0]}</a></li>
        );
    }
    
    const [show, setShow] = useState(false);


    return(
        <div className='entry-page'>
            <CloseIcon className='close-icon' onClick={props.history.goBack} />
            <div className='entry-container'>
                <div className='entry-header'>
                    <h1>{entry.title? entry.title.rendered : "loading"}</h1>
                </div>
                <hr></hr>
                {/* <div className='gallery-test'>
                    <button onClick={() => setIsOpen(true)}>View Details</button>
                    <ReactBnbGallery
                        show={isOpen}
                        photos={Photos}
                        onClose={() => setIsOpen(false)} />
                    
                </div> */}
                <div id="image-gallery">
                    <ImageGallery items={Photos} showPlayButton={false}/>
                </div>
                <Collapsible trigger="Media Caption" open>
                    
                </Collapsible>
                <Collapsible trigger="Description" open>
                    {getContent(entry)}
                </Collapsible>
               
                <Collapsible trigger="Related Topics" open>
                    {tag_lists}
                </Collapsible>

                <div className="media-search-bar">
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
                        <Col>
                          <Button variant="primary" href={reactInit.adminUrl + 'post.php?post=' + id + '&action=edit'}>
                             Edit this Stop
                          </Button>
                        </Col>
                    </Form.Row>
                    </Form>
                </div>

            </div>

            
        </div>);
}

export default EntryPage;