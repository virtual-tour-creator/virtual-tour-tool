import React from 'react';
import './TourPage.styles.css'

export default function MediaCard({stop, onClick}) {
  return (
    // <div className="single-stop" style={{width: "20rem"}} onClick={onClick}>
    <div className="single-stop" >
        <img alt={stop.name} src={stop.medium_url} style={{width: "20rem"}} className="stop-thumbnail" onClick={onClick}/>  
        <p className="stop-name">{stop.name}</p>
    </div>
  );
}