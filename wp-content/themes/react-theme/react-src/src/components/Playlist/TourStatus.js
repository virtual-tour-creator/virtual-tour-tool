import React from 'react';
import './Playlist.styles.css';


const renderStatus = (status) => status === 'private'?
	<span className="complete-status">COMPLETE</span> :
	<span className="incomplete-status">INCOMPLETE</span>

const creationDetails = (status) => status === 'private'?
	"complete-details" : "incomplete-details"



const parseDate = (date) => {
	if (date) {
		const parts = date.split('-');
		if (parts.length != 3) return "";
		return  parts[1] + '/' + parts[2] + '/' + parts[0];
	}
	// TODO: deal with empty date
	return "";
}

const TourStatus = (props) => {
	const { visibility, date, username } = props;
    return (
        <div className="tour-status">
            {renderStatus(visibility)}
            <span className={creationDetails(visibility)}> Tour Date: {parseDate(date)} | Tour Editor: {username} </span> 
        </div>
    )
}

export default TourStatus;