import React from 'react';
import './TourPage.styles.css'

import PlaceholderThumbnail from '../../images/placeholder-thumbnail.png';

export default function MediaCard({stop, onClick}) {
  return (
    // <div className="single-stop" style={{width: "20rem"}} onClick={onClick}>
    <div className="single-stop" >
        <img alt={stop.name} src={stop.medium_url==false? PlaceholderThumbnail : stop.medium_url} style={{width: "100%"}} className="stop-thumbnail" onClick={onClick}/>  
        <p className="stop-name">{stop.name}</p>
    </div>
  );
}