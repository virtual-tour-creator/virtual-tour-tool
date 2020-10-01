import React from 'react';
import { withRouter } from 'react-router-dom';
import './Entries.styles.css';

const Entries = props => (
    <div key={props.listId} className='entries'>
        {props.entries.map(entry =>
            <div key={entry.id} className='entry'>
                <img src={entry.thumbnail_url} onClick={() => props.history.push(`/entry/${entry.id}`) }/>
                <p> {entry.entryName} </p>
            </div>)}
    </div>
)

export default withRouter(Entries);