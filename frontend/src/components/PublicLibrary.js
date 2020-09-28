import React from 'react';
import Navbar from './Navbar/Navbar';
import Jumbotron from './Jumbotron/Jumbotron';
import Playlist from './Playlist/Playlist';

class PublicLibrary extends React.Component {
    constructor() {
        super();
        this.state = {
            playlists: require('../components/data/data.json')
          };
    }

    render() {
        return (
            <div className="public-library">
                <Navbar />
                <Jumbotron />
                <Playlist playlists={this.state.playlists} />
            </div>
        )
    }
}

export default PublicLibrary;