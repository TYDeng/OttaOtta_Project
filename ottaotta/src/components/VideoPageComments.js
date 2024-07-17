import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import user from '../assets/user.png';
import JG from '../assets/User-James Gouse.png';

// just text, function lack
function Comments() {
  return (
    <div className="mt-3 p-2">
      <h5>Comments 7345</h5>
      <div className="row">
        <div className="input-group">
          <img src={user} alt="user" width="40" height="40" />
          <input type="text" className="form-control ms-3" placeholder="Add a comment..." />
          <button type="button" className="btn btn-primary" data-mdb-ripple-init>
            <i className="bi bi-send"></i>
          </button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-auto">
          <a href="#" className="nav-link" title="JG">
            <img src={JG} alt="JG" width="40" height="40" />
          </a>
        </div>
        <div className="col pb-2 border-bottom">
          <div className="row-auto">
            <a href="#" className="nav-link" title="JG">
              <p className="fs-6 fw-bold mb-0">James Gouse</p>
            </a>
          </div>
          <div className="row">
            <p className="fs-6 mb-0">It's great!</p>
          </div>
          <div className="row align-items-center g-0">
            <div className="col-auto justify-content-center">
              <p className="text-secondary small mb-0">8 hours ago</p>
            </div>
            <div className="col-auto">
              <div className="d-flex align-items-center p-0">
                <button className="btn btn-no-bg">
                  <i className="bi bi-hand-thumbs-up text-primary" style={{ fontSize: '15px' }}></i>
                </button>
                <span className="fs-6 text-center">3</span>
              </div>
            </div>
            <div className="col-auto">
              <div className="d-flex align-items-center p-0">
                <button className="btn btn-no-bg">
                  <i className="bi bi-hand-thumbs-down text-primary" style={{ fontSize: '15px' }}></i>
                </button>
              </div>
            </div>
            <div className="col-auto">
              <div className="d-flex align-items-center p-0">
                <button className="btn btn-no-bg">
                  <p className="text-primary small mb-0">Reply</p>
                </button>
              </div>
            </div>
            <div className="col justify-content-end">
              <div className="d-flex justify-content-end">
                <button className="btn btn-no-bg">
                  <i className="bi bi-three-dots-vertical text-primary" style={{ fontSize: '15px' }}></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add more comments similarly */}
    </div>
  );
}

export default Comments;
