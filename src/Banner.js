import React from 'react';
import './Banner.css';


const Banner = () => {
  return (
    <div id="/" className="image-banner">
      <div className="banner text container">
        <h1  className="banner text header">
          <div id="banner-name" className="ui center aligned icon header">
            <i className="futbol outline icon"></i>
              View the latest football stats...
          </div>
        </h1>
      </div>
    </div>
  );
};

export default Banner;
