import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Entries from './Entries/Entries';
import CopyTour from '../Button/CopyTour';
import './Playlist.styles.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import TourStatus from './TourStatus';




const Playlist = props => {


    // <Entries entries={playlist.entries}
	return (
		<div className='public-playlists'>
        {props.playlists.map(playlist => (
            <div key={playlist.id} className="public-playlist">
                <div className="title-container">
                    <span className="tour-title" onClick={() => props.history.push(`/tour/${playlist.id}`)}>{playlist.name}</span>
                    <DropdownButton
                        title="MENU"
                        id="dropdown-menu-align-right"
                        menuAlign="right"
                        >
                        <Dropdown.Item eventKey="1" onClick={() => props.history.push(`/tour/${playlist.id}`)}>VIEW ALL</Dropdown.Item>
                        <Dropdown.Item eventKey="2"><CopyTour props={playlist}/></Dropdown.Item>
                        <Dropdown.Item eventKey="3">EDIT THIS TOUR</Dropdown.Item>
                    </DropdownButton>
                </div>
                <TourStatus />
                <Entries listId={playlist.id} entries={playlist.entries}/>
            </div>
        ))
        }
    	</div>
	);
};

export default withRouter(Playlist);