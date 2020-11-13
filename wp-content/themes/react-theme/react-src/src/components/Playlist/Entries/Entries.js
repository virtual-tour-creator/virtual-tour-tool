import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './Entries.styles.css';

import Carousel, { slidesToShowPlugin, slidesToScrollPlugin,arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


import LeftIcon from '../../../images/left-arrow.png';
import RightIcon from '../../../images/right-arrow.png';
import LeftIconDisabled from '../../../images/left-arrow-disabled.png';
import RightIconDisabled from '../../../images/right-arrow-disabled.png';
import PlaceholderThumbnail from '../../../images/placeholder-thumbnail.png';

import { Overlay } from 'react-portal-overlay';
import StopOverlay from '../../EntryPage/StopOverlay';

const customArrow = {
    resolve: arrowsPlugin,
    options: {
      arrowLeft: <button className='carousel-arrow-btn'><img className="carousel-arrow" src={LeftIcon}/></button>,
      arrowLeftDisabled:<button className='carousel-arrow-btn'><img className="carousel-arrow" src={LeftIconDisabled}/></button>,
      arrowRight: <button className='carousel-arrow-btn'><img className="carousel-arrow" src={RightIcon} /></button>,
      arrowRightDisabled: <button className='carousel-arrow-btn'><img className="carousel-arrow" src={RightIconDisabled} /></button>,
      addArrowClickHandler: true,
    }
}

const Entries = props => {
  const [showStopOverlay, setShowStopOverlay] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const stopIds = props.entries.map(singleStop => singleStop.id)

  const handleClick = (index) => {
    setShowStopOverlay(true);
    setCurrentIndex(index);
  }

  return(
          <div key={props.listId} className='row stop-carousel'>
          <Carousel 
              arrows
              addArrowClickHandler
              offset={0}
              plugins={[
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 5
                    }
                  },
                  {
                    resolve: slidesToScrollPlugin,
                    options: {
                      numberOfSlides: 5
                    }
                  },
                  customArrow
              ]}
              breakpoints={{
                  790: {
                      plugins: [
                      {
                        resolve: slidesToShowPlugin,
                        options: {
                          numberOfSlides: 1
                        }
                      },
                      customArrow
                    ]
                    },
                  1110: {
                      plugins: [
                      {
                        resolve: slidesToShowPlugin,
                        options: {
                          numberOfSlides: 2
                        }
                      },
                      customArrow
                    ]
                    },
                  1420: {
                    plugins: [
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 3
                      }
                    },
                    customArrow
                  ]
                  },
                  1800: {
                      plugins: [
                      {
                        resolve: slidesToShowPlugin,
                        options: {
                          numberOfSlides: 4
                        }
                      },
                      customArrow
                    ]
                    }
                }}
              >

          {props.entries.map((entry,index) =>
              <div key={entry.id} className='entry'>
                  <img style={{width:"19rem"}} alt='entry' src={entry.medium_url==false? PlaceholderThumbnail : entry.medium_url} onClick={() => handleClick(index)}/> 
                  <p className="entry-name"> {entry.name} </p>
              </div> )}
          </Carousel>

          <Overlay
            style={{
                "background": 'white',
                "width": '100%',
                "padding": "0 2rem",
            }}
            open={showStopOverlay}
            >
            <StopOverlay
                handleClose={() => setShowStopOverlay(false)}
                stopIds={stopIds}
                index={currentIndex}
                />
            
        </Overlay>  
      </div>

  )
}
   

export default withRouter(Entries);