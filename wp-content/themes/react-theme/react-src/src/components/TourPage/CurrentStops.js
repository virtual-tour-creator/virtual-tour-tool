import React from 'react';
import { SortableElement, SortableContainer } from 'react-sortable-hoc';


// const tempStyles = {
//     root: {
//         width: "20%";

//     }
// }

const StopBox = SortableElement(({singleStop, index, handleRemove}) => {
    return (
        <div>
            <img alt='stop' src={singleStop.thumbnailUrl} />
            <p> {singleStop.name} </p>
            <button onClick={() => handleRemove(index)}>Remove</button>
        </div>
    )
})



const StopBoxList = SortableContainer(({ stops, onRemoveStop }) => {
        return(
            <div>
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




// class CurrentStops extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     handleRemove = (index) => {
//         this.props.onRemoveStop(index);
//     }



//     render() {
//         return(
//             <div>
//                 <StopBoxList 
//                     stops={this.props.stops} 
//                     handleRemove={this.handleRemove}
//                     axis='xy'
//                     onSortEnd={() => this.props.onSortEnd}/>
//             </div>
//         )
//     }
// }




export default StopBoxList;