import React from 'react';
import './Entries.styles.css';

const Entries = props => (
    <div className='entries'>
        {props.entries.map(entry =>
            <div className='entry'>
            <img src={entry.thumbnailUrl} />
            <p> {entry.entryName} </p>
            </div>)}
    </div>
)

export default Entries;