import React from 'react';
import './TourPage.styles.css'

export default function MediaCard({stop, onClick}) {
  return (
    // <div className="single-stop" style={{width: "20rem"}} onClick={onClick}>
    <div className="single-stop" onClick={onClick}>
        <img alt={stop.name} src={stop.medium_url} className="card-img-top" />  
        <div className="card-body d-flex">
            <p className="card-text">{stop.name}</p>
        </div>
    </div>
  );
}