import React from 'react';
import { withRouter } from 'react-router-dom';
import './Entries.styles.css';

import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


const Entries = props => (
    <div key={props.listId} className='row stop-carousel'>
        <Carousel 
            arrows
            slidesPerPage={5}
            slidesPerScroll={5}
            arrowLeft={<NavigateBeforeIcon className="carousel-arrow"/>}
            arrowRight={<ChevronRightIcon className="carousel-arrow" />}
            addArrowClickHandler
            offset={0}
            >

        {props.entries.map(entry =>
            <div key={entry.id} className='entry'>
                <img style={{width:"19rem"}} alt='entry' src={entry.medium_url} onClick={() => props.history.push(`/stop/${entry.id}`) }/> 
                <p className="entry-name"> {entry.name} </p>
            </div> )}  
        </Carousel>
    </div>
)

export default withRouter(Entries);