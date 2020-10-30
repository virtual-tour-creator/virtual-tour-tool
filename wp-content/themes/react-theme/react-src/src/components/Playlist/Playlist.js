import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Entries from './Entries/Entries';
import './Playlist.styles.css';


const Playlist = props => {

    // <Entries entries={playlist.entries}
	return (
		<div className='public-playlists'>
        {props.playlists.map(playlist => (
            <div key={playlist.id} className='public-playlist'>
                <h1>{playlist.name.toUpperCase()}<span><Link id="view-all-button" to={`/tour/${playlist.id}`}>VIEW ALL</Link></span></h1>
                <Entries listId={playlist.id} entries={playlist.entries}/>
            </div>
        ))
        }
    	</div>
	);
};

export default withRouter(Playlist);