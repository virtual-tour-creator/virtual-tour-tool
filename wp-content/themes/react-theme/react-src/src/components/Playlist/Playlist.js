import React from 'react';
import { withRouter } from 'react-router-dom';
import Entries from './Entries/Entries';
import './Playlist.styles.css';


const Playlist = props => {

    // <Entries entries={playlist.entries}
	return (
		<div className='public-playlists'>
        {props.playlists.map(playlist => (
            <div key={playlist.id} className='public-playlist'>
                <h1>#{playlist.name}</h1>
                <Entries listId={playlist.id} entries={playlist.entries}/>
            </div>
        ))
        }
    	</div>
	);
};

export default withRouter(Playlist);