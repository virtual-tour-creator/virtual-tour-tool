import React from 'react';
import { withRouter } from 'react-router-dom';
import './Entries.styles.css';

import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


import LeftIcon from '../../../images/left-arrow.png';
import RightIcon from '../../../images/right-arrow.png';
import PlaceholderThumbnail from '../../../images/placeholder-thumbnail.png';


const Entries = props => (
    <div key={props.listId} className='row stop-carousel'>
        <Carousel 
            arrows
            slidesPerPage={5}
            slidesPerScroll={5}
            arrowLeft={<img className="carousel-arrow" src={LeftIcon}/>}
            arrowRight={<img className="carousel-arrow" src={RightIcon} />}
            addArrowClickHandler
            offset={0}
            >

        {props.entries.map(entry =>
            <div key={entry.id} className='entry'>
                <img style={{width:"19rem"}} alt='entry' src={entry.medium_url==false? PlaceholderThumbnail : entry.medium_url} onClick={() => props.history.push(`/stop/${entry.id}`) }/> 
                <p className="entry-name"> {entry.name} </p>
            </div> )}  
        </Carousel>
    </div>
)

export default withRouter(Entries);