import React from 'react';
import { SortableElement, SortableContainer } from 'react-sortable-hoc';
import MediaCard from './MediaCard';
import './TourPage.styles.css';


const StopBox = SortableElement(({singleStop, index, handleRemove}) => {
    return (
        <div className='edit-stop'>
            <MediaCard stop={singleStop} />
            <span className='delete-icon'><i className="fas fa-times-circle"></i></span>
            <button onClick={() => handleRemove(index)}>Remove</button>
        </div>
    )
})



const StopBoxList = SortableContainer(({ stops, onRemoveStop }) => {
        return(
            <div className='edit-stops'>
                {stops.map((singleStop, index) =>
                <div key={index} className='stop'>
                    <StopBox 
                        index={index}
                        singleStop={singleStop} 
                        key={index} 
                        handleRemove={() => onRemoveStop(index)}/>
                </div>)}
            </div>
        )
        
    }
) 


export default StopBoxList;