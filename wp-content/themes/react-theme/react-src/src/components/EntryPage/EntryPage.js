import React, { useEffect, useState } from 'react';
import './EntryPage.styles.css';

import ImageGallery from 'react-image-gallery';

import 'react-bnb-gallery/dist/style.css'
import Collapsible from 'react-collapsible';


const getContent = entry => {
    if (entry.content) 
        return (
            <div dangerouslySetInnerHTML={{ __html: entry.content.rendered }} />
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
    let media = "None";
    let Photos = [];
    if (entry.acf_media)
    {
        media = entry.acf_media.map((media) =>
            <img alt='media' src={media.thumbnail_url} />
        )


        Photos = entry.acf_media.map((media) => {
            let photo = {};
            photo['original'] = media.full_url;
            photo['thumbnail'] = media.thumbnail_url;
            photo['description'] = media.title;
            return photo;
        }
        )
        
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
            <a className='close-icon' href="/"><i className="fas fa-times"></i></a>
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
                    <ImageGallery items={Photos} />
                </div>
                
                
                <Collapsible trigger="Description" open="true">
                    {getContent(entry)}
                </Collapsible>
               
                <Collapsible trigger="Related Topics" open="true">
                    {tag_lists}
                </Collapsible>

                

            </div>

            
        </div>);
}

export default EntryPage;

