import React from 'react';
import './Jumbotron.styles.css';

class Jumbotron extends React.Component {
    render() {
        return(
            <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Library Database</h1>
            </div>
            </div>
        )
    }
}

export default Jumbotron;