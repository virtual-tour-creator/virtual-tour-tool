import React from 'react';


// const tempStyles = {
//     root: {
//         width: "20%";

//     }
// }

class StopBox extends React.Component {

}



class StopBoxList extends React.Component {

}




class CurrentStops extends React.Component {
    constructor(props) {
        super();
        this.state={};
    }

    handleRemove = (index) => {
        this.props.onRemoveStop(index);
    }

    render() {
        return(
            <div>
                {this.props.stops.map((singleStop, index) =>
                    <div key={index} className='stop'>
                        <img alt='stop' src={singleStop.thumbnailUrl} />
                        <p> {singleStop.name} </p> <button onClick={() => this.handleRemove(index)}>Remove</button>
                    </div>)}
            </div>
        )
    }
}




export default CurrentStops;