import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import videoData from '../datas/videoData';
import { Link } from 'react-router-dom';

// needs filters work, additional RecommandationVideocard.js
function Recommendations() {
  return (
    <div className="pt-2 mt-3 border-top">
      <h5>Recommendations:</h5>
      {videoData.slice(1).map((video, index) => (
        <div className="row mb-2 pt-1" key={index}>
          <div className="col-5">
            <Link to={`/video/${encodeURIComponent(video.title)}`} className="nav-link" title={video.title}>
              <img src={video.imgSrc} className="card-img-top" alt={video.title} />
            </Link>
          </div>
          <div className="col-7" style={{ fontSize: 'smaller' }}>
            <Link to={`/video/${encodeURIComponent(video.title)}`} className="nav-link" title={video.title}>
              <h6>{video.title}</h6>
            </Link>
            <p>{`${video.profileTitle} ${video.views} views || ${video.time}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
}


export default Recommendations;
