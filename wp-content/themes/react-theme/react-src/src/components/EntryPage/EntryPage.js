import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './EntryPage.styles.css';

import ReactBnbGallery from 'react-bnb-gallery';

import 'react-bnb-gallery/dist/style.css'

// //data field
// import PlaylistsData from '../data/data.json';


// // for temporary use. Replace with entry link when inserting data
// const allEntries = []

// for(let i=0; i<PlaylistsData.length; i++) {
//     for(let j=0; j<PlaylistsData[i]['entries'].length; j++){
//         allEntries.push(PlaylistsData[i]['entries'][j]);
//     }
// }

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
    }, [])


    // load media
    let media = "None";
    let Photos = 'None';
    if (entry.acf_media)
    {
        media = entry.acf_media.map((media) =>
            <img src={media.thumbnail_url} />
        )


        Photos = entry.acf_media.map((media) => {
            let photo = {};
            photo['photo'] = media.full_url;
            photo['caption'] = media.title;
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
    
    const [isOpen, setIsOpen] = useState(false);


    return(
        <div className='entry-page'>
            <div className='entry-container'>
                <div className='entry-header'>
                    <h1>{entry.title? entry.title.rendered : "loading"}</h1>
                    <Link className='close-icon' to="/">Close</Link>
                </div>
                <hr></hr>
                {media}
                <div className='gallery-test'>
                    <button onClick={() => setIsOpen(true)}>View Details</button>
                    <ReactBnbGallery
                        show={isOpen}
                        photos={Photos}
                        onClose={() => setIsOpen(false)} />
                    
                </div>
                <h2>Description</h2>
                {getContent(entry)}

                <h2>Related Topics</h2>
                {tag_lists}
            </div>

            
        </div>);
}

export default EntryPage;