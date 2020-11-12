import React, { useEffect, useState } from 'react';

import ImageGallery from 'react-image-gallery';
import BrandingLogo from '../Navbar/BrandingLogo';
import { RestAPIGetStopById } from '../../helpers/RestAPIHelper';

import CloseIcon from '../../images/overlay-close-icon.png';

import './StopOverlay.styles.css';



const getContent = entry => {
    if (entry.content) 
        return (
            <div dangerouslySetInnerHTML={{ __html: entry.content.rendered }} />
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

    let time =  new Date().getTime();
    const [currentIndex, setCurrentIndex] = useState(index);

    const [searchStr, setSearchStr] = useState("");
    const [stop, setStop] = useState([]);
    useEffect(() => {
        RestAPIGetStopById(stopIds[currentIndex], time, setStop);
    },[])

    const getMediaSearchLink = () => {
        if (searchStr === '') return "";
        return reactInit.searchMediaUrl + encodeURI(searchStr);
    };


    const gotoPrevPage = () => {
        const index = (currentIndex - 1) % stopIds.length
        setCurrentIndex(index);
        RestAPIGetStopById(stopIds[index], time, setStop);

    }

    const gotoNextPage = () => {
        const index = (currentIndex + 1) % stopIds.length
        setCurrentIndex(index);
        RestAPIGetStopById(stopIds[index], time, setStop);
 
    }

   

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
  
      // console.log(Photos);
  
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


    return(
        <div>
            <div id="presentation-logo"><BrandingLogo/></div>
            <img onClick={handleClose} className="presentation-close-icon" src={CloseIcon} />
            <div className='container' style={{'textAlign':'center'}}>
                <button onClick={gotoPrevPage}>Previous Stop</button> 
                <button onClick={gotoNextPage}>Next Stop</button>
                <h1>Stop Name: {stop_name}</h1>
            </div>
            {/* <h1>current index:{currentIndex}</h1> */}
            <div className="image-gallery-container">
                <ImageGallery 
                    items={Photos}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    infinite={false} />
            </div>
           
            
        </div>
    )
}

export default StopOverlay;