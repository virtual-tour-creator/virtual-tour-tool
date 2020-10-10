import React from 'react';
import { withRouter } from 'react-router-dom';
import './Entries.styles.css';


const Entries = props => (
    <div key={props.listId} className='entries row'>
        {props.entries.map(entry =>
            <div key={entry.id} className='entry'>
                <img alt='entry' src={entry.thumbnail_url} onClick={() => props.history.push(`/entry/${entry.id}`) }/>
                <p> {entry.name} </p>
            </div>)}
    </div>
)

export default withRouter(Entries);