import React from 'react';
import Entries from './Entries/Entries';
import './Playlist.styles.css';


const Playlist = props => (
    <div className='public-playlists'>
        {props.playlists.map(playlist => (
            <div className='public-playlist'>
                <h1>#{playlist.listName}</h1>
                <Entries entries={playlist.entries} />
            </div>
        ))
        }
    </div>
   
);

export default Playlist;