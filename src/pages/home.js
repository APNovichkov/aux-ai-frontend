import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="home-wrapper">
      <div className="home">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="hero-text text-center">
              Generate Music in the Style of{" "}
              <span className="blue-text word">
                <span>Chopin</span>
                <span>Tchaikovsky</span>
                <span>Rachmaninov</span>
              </span>
            </div>
            <div className="hero-action">
              <div className="d-flex justify-content-center align-items-center">
                {/* <div className="music-image hero-action-item">
                  <img src="/assets/images/music-notes.png"></img>
                </div> */}
                <Link to="/create" className="compose-button hero-action-item">
                  Go Create
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="about-wrapper">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10 text-center">
              <div className="header">About</div>
              <div className="description">
                Aux.ai is powered by an LSTM Deep Learning Model and was trained on music datasets of multiple
                composers, using only the piano part as training data
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
        <div className="composers-wrapper text-center">
          <div className="composers">
            <span className="fas fa-user"></span> Composers
          </div>
          <div className="composer-list-wrapper">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-4">
                    <div className="composer-item">Chopin</div>
                  </div>
                  <div className="col-md-4">
                    <div className="composer-item">Rachmaninov</div>
                  </div>
                  <div className="col-md-4">
                    <div className="composer-item">Tchaikovsky</div>
                  </div>
                </div>
              </div>

              <div className="col-md-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
