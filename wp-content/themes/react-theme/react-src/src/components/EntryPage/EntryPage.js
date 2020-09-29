import React from 'react';
import { Link } from 'react-router-dom';
import './EntryPage.styles.css';

//data field
import PlaylistsData from '../data/data.json';


// for temporary use. Replace with entry link when inserting data
const allEntries = []

for(let i=0; i<PlaylistsData.length; i++) {
    for(let j=0; j<PlaylistsData[i]['entries'].length; j++){
        allEntries.push(PlaylistsData[i]['entries'][j]);
    }
}
const EntryPage = props => {
    let loadingId = props.match.params.entryId;
    let loadingEntry = {};
    for(let i=0; i<allEntries.length; i++){
        if (allEntries[i]['entryId'] == loadingId) {
            loadingEntry = allEntries[i];
        }
    }

    return(
        <div className='entry-page'>
            <div className='entry-container'>
                <div className='entry-header'>
                    <h1> {loadingEntry.entryName} </h1>
                    <Link className='close-icon' to="/">Close</Link>
                </div>
                <hr></hr>
                <h2>Description</h2>
                <p> {loadingEntry.description} </p>
            </div>
            
            

        </div>);
}

export default EntryPage;