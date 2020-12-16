import React from 'react';
import { withRouter } from 'react-router-dom';
import PlaylistWrapper from './PlaylistWrapper';
import './Playlist.styles.css';

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