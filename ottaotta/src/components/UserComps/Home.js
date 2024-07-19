import React, { useState } from 'react';
import userImage from '../../assets/UserImage.png';
import user from '../../assets/user.png';


function Home() {
    return (
      <div className="col-10">
        <header className="d-flex justify-content-between align-items-center pt-5 mb-4">
          <h1>Home</h1>
        </header>
        
        <div className="card my-2">
          <div className="card-body">
            <section id="image">
                <div className="container-fluid p-0">
                    <img src={userImage} className="img-fluid w-100" alt="HomeImage" style={{ height: '200px', objectFit: 'cover' }} />
                </div>
            </section>

            <div className="mt-5">
                <div className="row">
                    <div className="col-2 align-items-center justify-content-center d-flex">
                    <a href="#" className="nav-link" title="destiny2">
                        <img src={user} alt="User" width="200" height="200" />
                    </a>
                    </div>
                    <div className="col-10 text-start">
                        <h1 class="text-start">UserName</h1>
                        <p className="fs-4 text-secondary" id="Info">@UserName || 816 subscribers || 14 videos</p>
                        <p className="fs-4 text-secondary" id="Sign">This is my account description, enjoy the contents and details</p>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>
        
    );
  }
  
  export default Home;