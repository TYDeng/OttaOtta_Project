import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import destiny2 from '../assets/destiny2.png';

function AccountInfo() {
  return (
    <div className="mt-3">
      <div className="row">
        <div className="col-3 align-items-center justify-content-center d-flex">
          <a href="#" className="nav-link" title="destiny2">
            <img src={destiny2} alt="destiny2" width="83" height="80" />
          </a>
        </div>
        <div className="col-9">
          <a href="#" className="nav-link" title="destiny2">
            <h4 class="text-start">Destiny 2</h4>
          </a>
          <p className="fs-6 text-secondary" id="signature">Destiny 2: The Final Shape, June 5, 2024.</p>
          <a href="#" className="btn btn-primary d-grid">Subscribe</a>
        </div>
      </div>
    </div>
  );
}

export default AccountInfo;
