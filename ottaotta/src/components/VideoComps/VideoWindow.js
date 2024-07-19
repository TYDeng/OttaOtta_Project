import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function VideoWindow({ video }) {
    if (!video) {
        return <div className="alert alert-danger" role="alert">Video not found</div>;
    }

    return (
        <div className="mb-4 mt-3">
            {/* VideoTitle */}
            <h3>{video.title}</h3>
            <p className="fs-6">{`${video.views} views || ${video.comments} comments || ${video.time}`}</p>

            {/* VideoWindow */}
            <div className="card border">
                <div className="card-body">
                <div className="ratio ratio-16x9">
                    <video controls>
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                </div>
                {/* button function not achieved now */}
                <div className="row row-cols-7 mt-3">
                    <div className="col">
                    <div className="d-flex align-items-center">
                        <button className="btn btn-light">
                        <i className="bi bi-hand-thumbs-up text-primary" style={{ fontSize: '30px', marginRight: '5px' }}></i>
                        </button>
                        <span className="fs-4 text-center">2.7k</span>
                    </div>
                    </div>
                    <div className="col">
                    <div className="d-flex align-items-center">
                        <button className="btn btn-light">
                        <i className="bi bi-share text-primary" style={{ fontSize: '30px', marginRight: '5px' }}></i>
                        </button>
                    </div>
                    </div>
                    <div className="col">
                    <div className="d-flex align-items-center">
                        <button className="btn btn-light">
                        <i className="bi bi-list text-primary" style={{ fontSize: '30px', marginRight: '5px' }}></i>
                        </button>
                    </div>
                    </div>
                    <div className="col">
                    <div className="d-flex align-items-center">
                        <button className="btn btn-light">
                        <i className="bi bi-download text-primary" style={{ fontSize: '30px', marginRight: '5px' }}></i>
                        </button>
                    </div>
                    </div>
                    <div className="col">
                    <div className="d-flex align-items-center">
                        <button className="btn btn-light">
                        <i className="bi bi-star text-primary" style={{ fontSize: '30px', marginRight: '5px' }}></i>
                        </button>
                    </div>
                    </div>
                    <div className="col-7">
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-light">
                        <i className="bi bi-three-dots-vertical text-primary" style={{ fontSize: '30px' }}></i>
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

// VideoWindow.propTypes = {
//   video: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     views: PropTypes.string.isRequired,
//     comments: PropTypes.string.isRequired,
//     time: PropTypes.string.isRequired,
//     src: PropTypes.string.isRequired,
//     imgSrc: PropTypes.string.isRequired,
//     profileImgSrc: PropTypes.string.isRequired,
//     profileTitle: PropTypes.string.isRequired,
//     category: PropTypes.string.isRequired,
//     likes: PropTypes.string // Assuming likes might be a property in the future
//   }).isRequired
// };

export default VideoWindow;
