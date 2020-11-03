import React from 'react';
import { SortableElement, SortableContainer } from 'react-sortable-hoc';
import './TourPage.styles.css';
import MediaCard from './MediaCard';


const StopBox = SortableElement(({singleStop, index, handleRemove, handleSwapLeft, handleSwapRight}) => {
    return (
        <li className='sortable-stop-card'>
            <button className='swap-button' id="swap-left"  onClick={() => handleSwapLeft(index)}> &#60; </button>
            <button className='swap-button' id="swap-right" onClick={() => handleSwapRight(index)}> &#62; </button>
            <button className='remove tour-page-button' onClick={() => handleRemove(index)}> X </button>
            
            <MediaCard stop={singleStop} />
        </li>
    )
})


const StopBoxList = SortableContainer(({ stops, onRemoveStop, onSwapLeft, onSwapRight }) => {
        return(
            <div>
                <ul className='sortable-row'>
                {stops.map((singleStop, index) =>
                    <StopBox 
                        index={index}
                        singleStop={singleStop} 
                        key={`item-${index}`} 
                        handleRemove={() => onRemoveStop(index)}
                        handleSwapLeft={() => onSwapLeft(index)}
                        handleSwapRight={() => onSwapRight(index)}/>
                )}
                </ul>
            </div>
        )
        
    }
) 


export default StopBoxList;