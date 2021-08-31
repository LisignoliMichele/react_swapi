import React from 'react';

import './bg-video.stylesheet.scss';
import bg_Video from './video/space.mp4'


const BackgroundVideo = () => {
   return (
      <div className='bg_video'>
         <video autoPlay loop muted id="video" poster="/img/poster_bg.jpg">
            <source src={bg_Video} type="video/mp4" />
         </video>
      </div>
   )
}

export default BackgroundVideo;