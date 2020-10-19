import React from 'react';
import './TourPage.styles.css'

export default function MediaCard({stop, onClick}) {
  return (
    <div className="card single-stop" style={{width: "18rem"}} onClick={onClick}>
        <img alt={stop.name} src={stop.thumbnailUrl} className="card-img-top" />  
        <div className="card-body align-items-center d-flex justify-content-center">
            <p className="card-text">{stop.name}</p>
        </div>
    </div>
  );
}