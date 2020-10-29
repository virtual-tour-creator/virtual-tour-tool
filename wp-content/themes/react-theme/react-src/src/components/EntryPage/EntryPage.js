import React, { useEffect, useState } from 'react';
import './EntryPage.styles.css';

import ImageGallery from 'react-image-gallery';

import 'react-bnb-gallery/dist/style.css'
import Collapsible from 'react-collapsible';
import CloseIcon from '@material-ui/icons/Close';


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
    const [entry, setEntry] = useState([]);
    useEffect(() => {
        async function loadEntry() {
            const response = await fetch('/wp-json/wp/v2/stop/' + id + '?timestamp=' + time);
            if(!response.ok) {
                console.log(response);
                return;
            }
    
            const entry = await response.json();
            setEntry(entry);
        }
        
        loadEntry();
    })

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
        tag_lists = entry.tag_names.map((name) =>
            <li>#{name}</li>
        );
    }
    
    // const [isOpen, setIsOpen] = useState(false);


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
                <Collapsible trigger="Description" open>
                    {getContent(entry)}
                </Collapsible>
               
                <Collapsible trigger="Related Topics" open>
                    {tag_lists}
                </Collapsible>

                

            </div>

            
        </div>);
}

export default EntryPage;