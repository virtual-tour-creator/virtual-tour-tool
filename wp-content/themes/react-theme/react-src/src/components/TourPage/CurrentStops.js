import React from 'react';
import { SortableElement, SortableContainer } from 'react-sortable-hoc';
import MediaCard from './MediaCard';
import './TourPage.styles.css';


const StopBox = SortableElement(({singleStop, index, handleRemove}) => {
    return (
        <div className='edit-stop'>
            {/* <CancelIcon className='remove' onClick={() => handleRemove(index)}/> */}
            <button className='remove tour-page-button' onClick={() => handleRemove(index)}> X </button>
            <MediaCard stop={singleStop} />
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