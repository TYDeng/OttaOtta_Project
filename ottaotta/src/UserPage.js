//This the page display user's general contents
import React, { useState, useEffect }from 'react';
import { useLocation } from 'react-router-dom';
import UserNav from './components/UserNav';
import UploadVideo from './components/UserComps/Upload';
import Collection from './components/UserComps/Collection';
import AccountSidebar from './components/AccountSidebar';


const UserPage = () => {
  // State to manage which component to display
  const [activeTab, setActiveTab] = useState('home');
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
      // case 'home':
      //   return <Home />;
      case 'upload':
        return <UploadVideo />;
      case 'Collection':
        return <Collection />;
      // case 'my videos':
      //   return <MyVideos />;
      // case 'analytics':
      //   return <Analytics />;
      // case 'messages':
      //   return <Messages />;
      // // Add other cases for additional tabs
      // default:
      //   return <Home />;
    }
  };
  
  return (
    <div>
      <UserNav />
      <div className="container-xxxl mt-3">
        <div className="container-fluid">
            <div className="row">
              <AccountSidebar setActiveTab={setActiveTab}/>
              {renderContent()}
            </div>
        </div>
      </div>  
    </div>
  );
};

export default UserPage;
