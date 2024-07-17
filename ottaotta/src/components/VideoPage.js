import React from 'react';
import VideoWindow from './VideoWindow';
import Navbar from './Navbar';
import Comments from './VideoPageComments';
import AccountInfo from './AccountInfo.js';
import Recommendations from './Recommendations';
import videoData from '../datas/videoData';

function VideoPage() {
  const video = videoData[0]; // Assuming the first video is the main one to display

  return (
    <div>
      <Navbar />
      <div className="container-xxxl mt-3">
        <div className="row">
          {/* Video and Comments Section */}
          <div className="col-9 text-start">
            <VideoWindow video={video} />
            <Comments />
          </div>

          {/* Account Info and Recommendations Section */}
          <div className="col-3 text-start">
            <AccountInfo />
            <Recommendations />
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default VideoPage;
