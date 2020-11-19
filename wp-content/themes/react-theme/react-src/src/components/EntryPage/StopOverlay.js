import React, { useEffect, useState, useRef } from 'react';

import ImageGallery from 'react-image-gallery';
import BrandingLogo from '../Navbar/BrandingLogo';
import { RestAPIGetStopById } from '../../helpers/RestAPIHelper';

import CloseIcon from '../../images/overlay-close-icon.png';

import LeftIcon from '../../images/gallery-left.png';
import RightIcon from '../../images/gallery-right.png';
import PrevStopIcon  from '../../images/prev-stop.png';
import NextStopIcon from '../../images/next-stop.png';
import InfoIcon from '../../images/info.png';
import CloseInfoIcon from '../../images/close-info.png';

import SpeakerNote from './SpeakerNote';

import './StopOverlay.styles.css';

import unescape from '../../helpers/unescape';


const getContent = stop => {
    if (stop.content) 
        return (
            <div dangerouslySetInnerHTML={{ __html: stop.content.rendered }} />
        );
}

const _renderVideo = item => {
    return (
        <div className='video-wrapper'>
            {/* <iframe
              src={item.embedUrl}
              frameBorder='0'
              allowFullScreen
              width="80%"
            >
            </iframe> */}
            <video controls="true" poster={item.original}>
                <source src={item.embedUrl} type="video/mp4" />
            </video>
        </div>     
    );
}

const _renderAudio = item => {
    return (
        <div className='video-wrapper'>
            {console.log(item.thumbnail)}
            <img className="audio-image" src={item.original}/>
            <video controls="true">
                <source src={item.embedUrl} type="video/mp4" />
            </video>
        </div>     
    );
}


const StopOverlay = ({handleClose, stopIds, index}) => {

    const ref = useRef(null)

    let time =  new Date().getTime();
    const [currentIndex, setCurrentIndex] = useState(index);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

     
    const [show, setShow] = useState(false);

    const [searchStr, setSearchStr] = useState("");
    const [stop, setStop] = useState([]);
    useEffect(() => {
        RestAPIGetStopById(stopIds[currentIndex], time, setStop);
    },[])

      // load media
      let Photos = [];
      let Captions = [];
      if (stop.acf_media)
      {
          Photos = stop.acf_media.map((media) => {
              const { type, thumbnail_url, full_url, file_url } = media;
              if (type === "video") {
                  let video = {
                      embedUrl: file_url,
                      description: '',
                      renderItem: _renderVideo,
                      thumbnail: thumbnail_url,
                      original: full_url
                  };
                  return video;
              }
              if (type === "audio") {
                  let audio = {
                      embedUrl: file_url,
                      description: '',
                      renderItem: _renderAudio,
                      thumbnail: thumbnail_url,
                      original: full_url
                  };
                  return audio;
              }
              let photo = {};
              photo['original'] = media.full_url;
              photo['thumbnail'] = media.thumbnail_url;
              photo['description'] = media.title;
              console.log("caption:", media.caption)
              return photo;
          });

          Captions = stop.acf_media.map((media) => media.caption);
      }
  
  
      // load tags
      let tag_lists = "None"
      if (stop.tag_names)
      {
          tag_lists = stop.tag_names.map((tag) =>
              <li className="related-topic-tag"><a className="related-topic-link" href={reactInit.searchStopTagUrl + tag[1]}>#{tag[0]}</a></li>
          );
      }

      let stop_name = ""
      if (stop.title != undefined)
      {
          stop_name = unescape(stop.title.rendered);
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
        if(currentIndex > 0) {
            let newIndex = currentIndex - 1
            setCurrentIndex(newIndex);
            RestAPIGetStopById(stopIds[newIndex], time, setStop);
        }
        setCurrentImageIndex(0);
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
        return Promise.resolve("")
    }

    const [isOpen, setIsOpen] = useState(false);

    const handleInfoClick = () => {
        setIsOpen(!isOpen);
        return Promise.resolve("")
    }

    const gotoBottom = () => {
        let element = document.getElementById("scroll");
        element.scrollTop = element.scrollHeight;
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
                    onThumbnailClick={() => handleThumbnailClick().then(() => setCurrentImageIndex(ref.current.getCurrentIndex()))} />
                {renderLeftNav()}
                {renderRightNav()}
            <div className="presentation-stop-name">{stop_name}</div>
            </div>

            <button 
                className="info-btn"
                type="button"
                data-toggle="collapse"
                data-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
                href="#collapseExample"
                onClick={() => handleInfoClick().then(() => gotoBottom())}>
                <img src={isOpen==true ? CloseInfoIcon : InfoIcon } />
            </button>
            <div id="scroll">
                <h1> </h1>
                <div class="collapse" id="collapseExample">
                    <SpeakerNote 
                        description={getContent(stop)}
                        tags={tag_lists}
                        id={stop.id}
                        style={{'display': 'none'}}
                        caption={Captions[currentImageIndex]}
                        />
                </div>
            </div>
           
            
           
            
        </div>
    )
}

export default StopOverlay;

