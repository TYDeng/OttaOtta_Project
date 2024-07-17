// src/components/HeaderImage.js
import React from 'react';
import homeImage from '../assets/home.jpg';

function HeaderImage() {
  return (
    <section id="image">
      <div className="container-fluid p-0">
        <img src={homeImage} className="img-fluid w-100" alt="HomeImage" style={{ height: '100px', objectFit: 'cover' }} />
      </div>
    </section>
  );
}

export default HeaderImage;
