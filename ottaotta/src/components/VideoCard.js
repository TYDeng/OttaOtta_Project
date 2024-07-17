import React from 'react';
import { Link } from 'react-router-dom';

function VideoCard({ video }) {
  if (!video) {
    return null; // Return null if video is undefined
  }

  return (
    <div className="card border-light shadow" style={{ width: '100%', height: '300px' }}>
      <Link to={`/video/${encodeURIComponent(video.title)}`} className="nav-link" title={video.title}>
        <img src={video.imgSrc} className="card-img-top" alt={video.title} />
      </Link>
      <div className="card-body text-left">
        <Link to={`/video/${encodeURIComponent(video.title)}`} className="nav-link" title={video.title}>
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="card-title mb-0">{video.title}</h6>
          </div>
        </Link>
        <div className="row align-items-center mt-2">
          <div className="col-4 d-flex align-items-center">
            <Link to={`/video/${encodeURIComponent(video.title)}`} className="nav-link p-0 d-flex align-items-center" title={video.profileTitle}>
              <img src={video.profileImgSrc} alt={video.profileTitle} width="27" height="25" className="me-2" />
              <span className="fs-6">{video.profileTitle}</span>
            </Link>
          </div>
          <div className="col-8 text-end">
            <p className="fs-7 mb-0 text-muted">{`${video.views} views || ${video.comments} comments || ${video.time}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
