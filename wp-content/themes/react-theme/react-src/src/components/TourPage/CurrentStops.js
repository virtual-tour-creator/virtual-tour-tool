import React from 'react';
import { SortableElement, SortableContainer } from 'react-sortable-hoc';
import MediaCard from './MediaCard';
import './TourPage.styles.css';

const StopBox = SortableElement(({singleStop, index, handleRemove, handleSwapLeft, handleSwapRight}) => {
    return (
        <div className='edit-stop'>
            <button className='swap-button' id="swap-left"  onClick={() => handleSwapLeft(index)}> &#60; </button>
            <button className='swap-button' id="swap-right" onClick={() => handleSwapRight(index)}> &#62; </button>
            <button className='remove tour-page-button' onClick={() => handleRemove(index)}> X </button>
            
            <MediaCard stop={singleStop} />
        </div>
    )
})


const StopBoxList = SortableContainer(({ stops, onRemoveStop, onSwapLeft, onSwapRight }) => {
        return(
            <div className='edit-stops'>
                {stops.map((singleStop, index) =>
                <div key={index} className='stop'>
                    <StopBox 
                        index={index}
                        singleStop={singleStop} 
                        key={index} 
                        handleRemove={() => onRemoveStop(index)}
                        handleSwapLeft={() => onSwapLeft(index)}
                        handleSwapRight={() => onSwapRight(index)}/>
                </div>)}
            </div>
        )
        
    }
) 


export default StopBoxList;