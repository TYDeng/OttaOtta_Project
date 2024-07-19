// src/components/Navbar.js
// Navbar used for the homepage and videopage navigation
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../../assets/OttaOtta.png';
import user from '../../assets/user.png';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary-subtle sticky-top">
      <div className="container-fluid">

        {/* Collapse button for small screens */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="d-flex justify-content-between align-items-center w-100">
            {/* Left side: Brand and Text */}
            <div className="d-flex align-items-center">
              <Link className="navbar-brand" to="/" title='OttaOtta Home'>
                <img src={logo} alt="OttaOtta" width="100" height="30" />
              </Link>
              <p className="fs-3 mb-0 ms-5 fw-bold ">Welcome OttaOtta</p>
            </div>

            {/* Search bar */}
            <div className="col-12 col-lg-6 mx-lg-auto my-2 my-lg-0 shadow">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search across the channel" />
                <button type="button" className="btn btn-primary">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
            
            {/* Right side: toolkit for notices */}
            <ul className="navbar-nav d-flex align-items-center">
              <li className="nav-item">
                <NavLink className="nav-link fs-5 me-4" to="/account/user" title='Account'>
                  <img src={user} alt="User" width="35" height="35" />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-5 me-4" to="/messages">
                  <i class="bi bi-chat-square-dots-fill" style={{ fontSize: '1.5rem' }} title = "Collection/Playlist">
                    <span class="position-absolute top-10 start-25 translate-middle p-1 bg-danger border border-light rounded-circle">
                      <span class="visually-hidden"></span>
                    </span>
                  </i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-5 me-4" to="/account/user?tab=Collection" title='Collection'>
                  <i class="bi bi-bookmark-heart-fill" style={{ fontSize: '1.5rem' }}></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-5 me-4" to="/collection" title='Playlist'>
                  <i class="bi bi-collection-play-fill" style={{ fontSize: '1.5rem' }}></i>
                </NavLink>
              </li>
            </ul>
            <NavLink to="/account/user?tab=Upload" className="nav-link p-0 me-1" title="Upload your video">
              <button className="btn btn-primary fs-5 shadow" type="button">
                <i class="bi bi-upload me-2"></i>
                Upload
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;