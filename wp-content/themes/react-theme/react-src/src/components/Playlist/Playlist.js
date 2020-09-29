import React from 'react';
import { withRouter } from 'react-router-dom';
import Entries from './Entries/Entries';
import './Playlist.styles.css';


const Playlist = props => (
    <div className='public-playlists'>
        {props.playlists.map(playlist => (
            <div key={playlist.listId} className='public-playlist'>
                <h1>#{playlist.listName}</h1>
                <Entries entries={playlist.entries} />
            </div>
        ))
        }
    </div>
   
);

export default withRouter(Playlist);