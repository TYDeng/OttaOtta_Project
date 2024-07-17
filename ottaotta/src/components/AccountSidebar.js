import React, { useState } from 'react';
import userImg from '../assets/user.png'; 
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ setActiveTab }) => {
  const [activeTab, setActive] = useState('');

  // Function to handle active tab change
  const handleSetActiveTab = (tabName) => {
    setActive(tabName); // Update local active state
    setActiveTab(tabName); // Update parent component's active state
  };
  
  return (
    <div className="col-2">
      <div className="d-flex flex-column pt-5 bg-transparent" style={{ height: '100vh'}}>
        {/* Account header */}
        <div className="row align-items-center justify-content-center d-flex">
          <div className="d-flex flex-column align-items-center">
            <img src={userImg} alt="account" width="90" height="90" />
            <h2 className="mt-2">User name</h2>
          </div>
        </div>
        <div className="align-items-center justify-content-center d-flex flex-column">
            <button 
              className={`btn btn-primary fs-5 mt-3 pd-4 shadow ${activeTab === 'Upload' ? 'active w-100 text-start shadow text-white' : ''}` }
              onClick={() => handleSetActiveTab('upload')}
              >
            <i class="bi bi-upload me-2"></i>
              Upload your video
            </button>
        </div>

        <hr />
        <ul className="nav nav-pills flex-column fs-5">
          <li className="nav-item">
            <button
              className={`nav-link text-dark fw-bold mt-3 mb-3 ${activeTab === 'home' ? 'active w-100 text-start shadow text-white' : ''}`}
              onClick={() => handleSetActiveTab('home')}
            >
              <i class="bi bi-house-door-fill pe-3"></i>Home
            </button>
          </li>
          <li>
            <button
              className={`nav-link text-dark fw-bold mb-3 ${activeTab === 'My Videos' ? 'active w-100 text-start shadow text-white' : ''}`}
              onClick={() => handleSetActiveTab('My Videos')}
            >
              <i class="bi bi-play-btn-fill pe-3"></i>My Videos
              
            </button>
          </li>
          <li>
            <button
              className={`nav-link text-dark fw-bold mb-3 ${activeTab === 'Analytics' ? 'active w-100 text-start shadow text-white' : ''}`}
              onClick={() => handleSetActiveTab('Analytics')}
            >
              <i class="bi bi-bar-chart-fill pe-3"></i>Analytics
            </button>
          </li>
          <li>
            <button
              className={`nav-link text-dark fw-bold mb-3 ${activeTab === 'Messages' ? 'active w-100 text-start shadow text-white' : ''}`}
              onClick={() => handleSetActiveTab('Messages')}
            >
              <i class="bi bi-chat-square-dots-fill pe-3"></i>Messages
              <span className="badge bg-danger ms-5">4</span>
              
            </button>
          </li>
          <li>
          <button
              className={`nav-link text-dark fw-bold mb-3 ${activeTab === 'Collection' ? 'active w-100 text-start shadow text-white' : ''}`}
              onClick={() => handleSetActiveTab('Collection')}
            >
              <i class="bi bi-bookmark-heart-fill pe-3"></i>Collection
            </button>
          </li>
          <li>
          <button
              className={`nav-link text-dark fw-bold mb-3 ${activeTab === 'Playlist' ? 'active w-100 text-start shadow text-white' : ''}`}
              onClick={() => handleSetActiveTab('Playlist')}
            >
              <i class="bi bi-collection-play-fill pe-3"></i>Playlist
            </button>
          </li>
          <li>
          <button
              className={`nav-link text-dark fw-bold mb-3 ${activeTab === 'History' ? 'active w-100 text-start shadow text-white' : ''}`}
              onClick={() => handleSetActiveTab('History')}
            >
              <i class="bi bi-clock-history pe-3"></i>History
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
