//routes
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Navbar from './components/Navbar';
import HomePage from './components/Pages/HomePage';
import VideoPage from './components/Pages/VideoPage';
import UserPage from './components/Pages/UserPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import './App.css';
import './components/i18n';
import Help from './components/UserComps/Help';
import Setting from './components/Setting';

function App() {
  return (
    <Router basename="/OttaOtta_Project">
      <div className="App">
        <Routes>
          {/* Home page */}
          <Route path="/" element={<HomePage />} />

          {/* VideoPage */}
          <Route path="/video/:title" element={<VideoPage />} />
          
          {/* userPage */}
          <Route path="/account/user" element={<UserPage />} />
          
          {/* HelpPage */}
          <Route path="/user/help" element={<Help />} />

          {/* Setting page */}
          <Route path="/user/settings" element={<Setting />} />
          {/* Other routes can be added here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
