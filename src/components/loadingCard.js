import React from "react";

const LoadingCard = (props) => {
  return (
    <div className="loading-card-wrapper">
      <div className="loading-card">
        <div className="header">Generating Your Song</div>
        <div className="description">
          This will take a couple of seconds, please be patient!
        </div>
        <div className="animation">
          <div className="loading-gif">
              <span className="fas fa-music"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;