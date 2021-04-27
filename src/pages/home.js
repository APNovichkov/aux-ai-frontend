import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="home-wrapper">
      <div className="home">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="hero-text text-center">
              Generate <span className="red-text">Music</span> in the Style of{" "}
              <span className="red-text">Mozart...</span>
            </div>
            <div className="hero-action">
              <div className="d-flex justify-content-center align-items-center">
                <div className="music-image hero-action-item">
                  <img src="/assets/images/music-notes.png"></img>
                </div>
                <Link to="/create" className="compose-button hero-action-item">
                  Go Create
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
