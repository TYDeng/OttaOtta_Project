//This the page display user's general contents
import React, { useState, useEffect }from 'react';
import { useLocation } from 'react-router-dom';
import UserNav from '../UserComps/UserNav';
import UploadVideo from '../UserComps/Upload';
import Collection from '../UserComps/Collection';
import Playlist from '../UserComps/Playlist';
import Home from '../UserComps/Home';

import userImg from '../../assets/user.png';
import MyVideo from '../UserComps/MyVideo';
import Analytics from '../UserComps/Analytics';
import Messages from '../UserComps/Messages';
import History from '../UserComps/History';


const UserPage = () => {
  // State to manage which component to display
  const [activeTab, setActiveTab] = useState('');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab) {
      setActiveTab(tab);
    }
  }, [location]);

  // Function to render the correct component based on activeTab state
  const renderContent = () => {
    switch (activeTab) {
      default:
        return <Home />;
      case 'Home':
        return <Home />;
      case 'Upload':
        return <UploadVideo />;
      case 'Collection':
        return <Collection />;
      case 'Playlist':
        return <Playlist />;
      case 'My Videos':
        return <MyVideo />;
      case 'Analytics':
        return <Analytics />;
      case 'Messages':
        return <Messages />;
      case 'History':
        return <History />;
      // // Add other cases for additional tabs
    }
  };
  
  return (
    <div>
      <UserNav />
      <div className="container-xxxl mt-3">
        <div className="container-fluid">
            <div className="row">
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
                        className={`btn btn-primary fs-5 mt-3 pd-4 shadow ${activeTab === 'Upload' ? 'active shadow text-white btn-dark' : ''}` }
                        onClick={() => setActiveTab('Upload')}
                        >
                      <i class="bi bi-upload me-2"></i>
                        Upload your video
                      </button>
                  </div>

                  <hr />
                  <ul className="nav nav-pills flex-column fs-5">
                    <li className="nav-item">
                      <button
                        className={`nav-link text-dark fw-bold mt-3 mb-3 ${activeTab === 'Home' ? 'active w-100 text-start shadow text-white' : ''}`}
                        onClick={() => setActiveTab('Home')}
                      >
                        <i class="bi bi-house-door-fill pe-3"></i>Home
                      </button>
                    </li>
                    <li>
                      <button
                        className={`nav-link text-dark fw-bold mb-3 ${activeTab === 'My Videos' ? 'active w-100 text-start shadow text-white' : ''}`}
                        onClick={() => setActiveTab('My Videos')}
                      >
                        <i class="bi bi-play-btn-fill pe-3"></i>My Videos
                        
                      </button>
                    </li>
                    <li>
                      <button
                        className={`nav-link text-dark fw-bold mb-3 ${activeTab === 'Analytics' ? 'active w-100 text-start shadow text-white' : ''}`}
                        onClick={() => setActiveTab('Analytics')}
                      >
                        <i class="bi bi-bar-chart-fill pe-3"></i>Analytics
                      </button>
                    </li>
                    <li>
                      <button
                        className={`nav-link text-dark fw-bold mb-3 ${activeTab === 'Messages' ? 'active w-100 text-start shadow text-white' : ''}`}
                        onClick={() => setActiveTab('Messages')}
                      >
                        <i class="bi bi-chat-square-dots-fill pe-3"></i>Messages
                        <span className="badge bg-danger ms-5">4</span>
                        
                      </button>
                    </li>
                    <li>
                    <button
                        className={`nav-link text-dark fw-bold mb-3 ${activeTab === 'Collection' ? 'active w-100 text-start shadow text-white' : ''}`}
                        onClick={() => setActiveTab('Collection')}
                      >
                        <i class="bi bi-bookmark-heart-fill pe-3"></i>Collection
                      </button>
                    </li>
                    <li>
                    <button
                        className={`nav-link text-dark fw-bold mb-3 ${activeTab === 'Playlist' ? 'active w-100 text-start shadow text-white' : ''}`}
                        onClick={() => setActiveTab('Playlist')}
                      >
                        <i class="bi bi-collection-play-fill pe-3"></i>Playlist
                      </button>
                    </li>
                    <li>
                    <button
                        className={`nav-link text-dark fw-bold mb-3 ${activeTab === 'History' ? 'active w-100 text-start shadow text-white' : ''}`}
                        onClick={() => setActiveTab('History')}
                      >
                        <i class="bi bi-clock-history pe-3"></i>History
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              {renderContent()}
            </div>
        </div>
      </div>  
    </div>
  );
};

export default UserPage;
