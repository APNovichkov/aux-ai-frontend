import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Import Utils
import { getSampleMp3Url } from "./../utils/urlUtils";

const Home = (props) => {
  const [selectedComposer, setSelectedComposer] = useState("chopin");
  const [isPlaying, setIsPlaying] = useState(false);

  const handleComposerClick = (composer) => {
    console.log("Handling composer click: ", composer);

    setSelectedComposer(composer);
    var x = document.getElementById("myAudio");

    if (isPlaying){
      x.pause();
      setIsPlaying(false);
    }else{
      x.play();
      setIsPlaying(true);
    }
    

    // if (composer === selectedComposer) {
    //   var x = document.getElementById("myAudio");
    //   x.stop();
    //   setSelectedComposer(null);
    // } else {

    // }
  };

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

        <div className="composers-wrapper text-center">
          <div className="composers">
            <span className="fas fa-user"></span> Composers
          </div>
          <div className="composers-description">
            The behind the scenes Deep Learning model was trained on musical pieces of these composers, focusing on the
            piano part in the training MIDI files. Click each card to hear a sample of what the model generated.
          </div>
          <div className="composer-list-wrapper">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-xl-4">
                    <div onClick={() => handleComposerClick("chopin")} className="composer-item">
                      {isPlaying && selectedComposer === "chopin" ? (<span className="far fa-stop-circle"></span> ) : (<span className="far fa-play-circle"></span> )}{" "}Chopin
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="composer-item">
                      <span className="far fa-play-circle"></span> Rachmaninov
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="composer-item">
                      <span className="far fa-play-circle"></span> Tchaikovsky
                    </div>
                  </div>
                  {selectedComposer && (
                    <audio id="myAudio" className="sample-audio-player">
                      <source src={getSampleMp3Url(selectedComposer)} />
                    </audio>
                  )}
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
