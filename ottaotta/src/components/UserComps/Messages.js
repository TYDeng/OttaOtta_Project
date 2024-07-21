import React, { useState } from 'react';
import userImage from '../../assets/UserImage.png';
import user from '../../assets/user.png';

function Messages() {
  const [showHelpText, setShowHelpText] = useState(false);
  const toggleHelpText = () => setShowHelpText(!showHelpText);

    return (
      <div className="col-10">
        <header className="d-flex justify-content-between align-items-center pt-5 mb-4">
          <div className="d-flex align-items-center">
            <h1 className="me-3">Messages</h1>
            <i
              className="bi bi-question-circle-fill"
              style={{ fontSize: '1.75rem', cursor: 'pointer' }}
              onMouseOver={(e) => (e.currentTarget.style.color = '#0d6efd')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'black')}
              onClick={toggleHelpText}
            ></i>
          </div>
        </header>
        {showHelpText && (
          <div className="alert alert-info" role="alert">
            This Page will show all messages you received with data.
          </div>
        )}
        
        <div className="card my-2">
          <div className="card-body">
            

          </div>
        </div>
      </div>
        
    );
  }
  
  export default Messages;