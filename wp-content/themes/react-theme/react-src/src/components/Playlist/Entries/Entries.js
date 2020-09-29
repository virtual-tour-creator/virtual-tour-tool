import React from 'react';
import { withRouter } from 'react-router-dom';
import './Entries.styles.css';

const Entries = props => (
    <div key={props.listId} className='entries'>
        {props.entries.map(entry =>
            <div key={entry.entryId} className='entry'>
                <img src={entry.thumbnailUrl} onClick={() => props.history.push(`/entry/${entry.entryId}`) }/>
                <p> {entry.entryName} </p>
            </div>)}
    </div>
)

export default withRouter(Entries);