import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Entries from './Entries/Entries';
import PlaylistWrapper from './PlaylistWrapper';
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


const Playlist = props => {

    const changeToEditMode = () => {
        props.props.setEditMode(true);
    }

    const changeToViewMode = () => {
        props.props.setEditMode(false);
    }
   

    // <Entries entries={playlist.entries}
	return (
		<div className='public-playlists'>
        { props.playlists.map(playlist => 
            <PlaylistWrapper playlist={playlist} history={props.history} changeToEditMode={changeToEditMode} changeToViewMode={changeToViewMode}/>)
        }
    	</div>
	);
}

export default withRouter(Playlist);