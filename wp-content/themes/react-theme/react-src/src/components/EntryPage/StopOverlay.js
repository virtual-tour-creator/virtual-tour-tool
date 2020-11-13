import React, { useEffect, useState, useRef } from 'react';

import ImageGallery from 'react-image-gallery';
import BrandingLogo from '../Navbar/BrandingLogo';
import { RestAPIGetStopById } from '../../helpers/RestAPIHelper';

import CloseIcon from '../../images/overlay-close-icon.png';

import LeftIcon from '../../images/gallery-left.png';
import RightIcon from '../../images/gallery-right.png';
import PrevStopIcon  from '../../images/prev-stop.png';
import NextStopIcon from '../../images/next-stop.png';


import './StopOverlay.styles.css';



const getContent = stop => {
    if (stop.content) 
        return (
            <div dangerouslySetInnerHTML={{ __html: stop.content.rendered }} />
        );
}

const _renderVideo = item => {
    return (
        <div className='video-wrapper'>
            <iframe
              src={item.embedUrl}
              frameBorder='0'
              allowFullScreen
            >
            </iframe>
        </div>     
    );
}


const StopOverlay = ({handleClose, stopIds, index}) => {

    const ref = useRef(null)

    let time =  new Date().getTime();
    const [currentIndex, setCurrentIndex] = useState(index);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const [searchStr, setSearchStr] = useState("");
    const [stop, setStop] = useState([]);
    useEffect(() => {
        RestAPIGetStopById(stopIds[currentIndex], time, setStop);
    },[])

    const getMediaSearchLink = () => {
        if (searchStr === '') return "";
        return reactInit.searchMediaUrl + encodeURI(searchStr);
    };



      // load media
      let Photos = [];
      if (stop.acf_media)
      {
          Photos = stop.acf_media.map((media) => {
              const { type, thumbnail_url, full_url } = media;
              if (type === "video") {
                  let video = {
                      embedUrl: full_url,
                      description: '',
                      renderItem: _renderVideo,
                      thumbnail: 'https://picsum.photos/150/150',
                      original: ''
                  };
                  return video;
              }
              if (type === "audio") {
                  let audio = {
                      embedUrl: full_url,
                      description: '',
                      renderItem: _renderVideo,
                      thumbnail: 'https://picsum.photos/150/150',
                      original: ''
                  };
                  return audio;
              }
              let photo = {};
              photo['original'] = media.full_url;
              photo['thumbnail'] = media.thumbnail_url;
              photo['description'] = media.title;
              return photo;
          });
      }
  
  
      // load tags
      let tag_lists = "None"
      if (stop.tag_names)
      {
          tag_lists = stop.tag_names.map((tag) =>
              <li><a href={reactInit.searchStopTagUrl + tag[1]}>#{tag[0]}</a></li>
          );
      }

      let stop_name = ""
      if (stop.title != undefined)
      {
          stop_name = stop.title.rendered;
      }



    // arrow change
    const renderLeftNav = () => {
        let index = currentImageIndex;
        if(index == 0 && currentIndex !== 0) {
            return(
                <img
                className='image-gallery-custom-left-nav'
                onClick={gotoPrevStop}
                src={PrevStopIcon}
                />
            )
        } else if(index !== 0) {
            console.log("current stop index", currentIndex);
            return (
                <img
                className='image-gallery-custom-left-nav'
                onClick={gotoPrevImage}
                src={LeftIcon}
                />
            )
        }
    }

    const renderRightNav = () => {
        let index = currentImageIndex;
        if (index == Photos.length - 1 && currentIndex !== stopIds.length-1){
            return(
                <img
                className='image-gallery-custom-right-nav'
                onClick={gotoNextStop}
                src={NextStopIcon}
                />
            )
        } else if (index !== Photos.length - 1){
            return (
                <img
                className='image-gallery-custom-right-nav'
                onClick={gotoNextImage}
                src={RightIcon}
                />
            )
        }
    }

    
    // for gallery
    const gotoPrevImage =  () => {
        let index = ref.current.getCurrentIndex()

        let newIndex = index - 1;
        ref.current.slideToIndex(newIndex);
        setCurrentImageIndex(newIndex);
    }

    const gotoNextImage =  () => {
        let index = ref.current.getCurrentIndex()
        let newIndex = index + 1;
        ref.current.slideToIndex(newIndex);
        setCurrentImageIndex(newIndex);
    }

    const gotoPrevStop = () => {
        setCurrentImageIndex(0);
        if(currentIndex > 0) {
            let newIndex = currentIndex - 1
            setCurrentIndex(newIndex);
            RestAPIGetStopById(stopIds[newIndex], time, setStop);
        }
    }

    const gotoNextStop = () => {
        setCurrentImageIndex(0);
        if(currentIndex < stopIds.length - 1){
            let newIndex = currentIndex + 1
            setCurrentIndex(newIndex);
            RestAPIGetStopById(stopIds[newIndex], time, setStop);
        } 
    }

    const handleThumbnailClick = () => {
        setCurrentIndex(0);
    }


    return(
        <div>
            <div id="presentation-logo"><BrandingLogo/></div>
            <img onClick={handleClose} className="presentation-close-icon" src={CloseIcon} />
            <div className='container' style={{'textAlign':'center'}}>
                {/* <h1>CurrentImageIndex: {currentImageIndex}</h1> */}
                
            </div>
            {/* <h1>current index:{currentIndex}</h1> */}
            <div className="image-gallery-container">
                <ImageGallery 
                    ref={ref}
                    items={Photos}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    infinite={false}
                    showNav={false}
                    onThumbnailClick={handleThumbnailClick} />
                {renderLeftNav()}
                {renderRightNav()}
            <h1>Stop Name: {stop_name}</h1>
            </div>

            <p>Stop Description: {getContent(stop)}</p>
           
            
        </div>
    )
}

export default StopOverlay;

