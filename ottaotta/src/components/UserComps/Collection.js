//3 steps for uploading, 2 need complete, 3 need to show all details
import React, { useState } from 'react';
import videoData from '../../datas/videoData';
import VideoCard from './CollectionCard';


function Collection() {
  const [videos, setVideos] = useState(videoData);
  const displayedVideos = videos.slice(0, 5);

  const rows = [];
  for (let i = 0; i < displayedVideos.length; i += 3) {
    rows.push(displayedVideos.slice(i, i + 3));
  }

  return (
    <div className="col-10">
      <header className="d-flex justify-content-between align-items-center pt-5 mb-4">
        <h1>Collection</h1>
      </header>
      
      <div className="card my-2">
        <div className="card-body">
          {rows.map((row, rowIndex) => (
            <div className="row mb-3" key={rowIndex}>
              {row.map((video, index) => (
                <div className="col-md-4" key={index}>
                  <VideoCard video={video} />
                </div>
              ))}
            </div>
          ))}
        
        </div>
      </div>
    </div>
      
  );
}

export default Collection;
