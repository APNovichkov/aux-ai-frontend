import React, { useState } from "react";
import axios from "axios";

import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

// Import utils
import { getGenerateUrl, getComposersUrl } from "./../utils/urlUtils";

const Create = (props) => {
  const [composer, setComposer] = useState();
  const [numNotes, setNumNotes] = useState(100);

  // Page Navigation
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateClick = () => {
    setIsLoading(true);
    setTimeout(5000, () => {
        setIsLoading(false);
    })
    // axios
    //   //   .get(getGenerateUrl(composer, numNotes))
    //   .get(getComposersUrl())
    //   .then((res) => {
          
    //     console.log("res: ", res.data);
    //   })
    //   .catch((err) => {
    //     console.log("err: ", err);
    //   });
  };

  return (
    <div className="create-wrapper">
      <div className="create text-center">
        <div className="composer-prompt-wrapper">
          <div className="composer-prompt">
            Choose a <span className="red-text">Composer</span>
          </div>
          <div className="composer-choices">
            <div className="d-flex justify-content-center">
              <div
                onClick={() => setComposer("chopin")}
                className={`composer-choice ${composer === "chopin" && "selected"}`}
              >
                Chopin
              </div>
              <div
                onClick={() => setComposer("rachmaninov")}
                className={`composer-choice ${composer === "rachmaninov" && "selected"}`}
              >
                Rachmaninov
              </div>
              <div
                onClick={() => setComposer("tchaikovski")}
                className={`composer-choice ${composer === "tchaikovski" && "selected"}`}
              >
                Tchaikovski
              </div>
            </div>
          </div>
        </div>
        <div className="num-notes-prompt-wrapper text-center">
          <div className="num-notes-prompt">Choose # of Notes to Generate</div>
          <div className="current-number-of-notes">{numNotes}</div>
          <div className="num-notes-slider-wrapper">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <div className="num-notes-slider">
                  <Slider
                    min={100}
                    max={400}
                    onChange={setNumNotes}
                    railStyle={{ backgroundColor: "#EDA1A1", height: "6px" }}
                    dotStyle={{ backgroundColor: "#CE1212", border: "1px solid #CE1212" }}
                    activeDotStyle={{ backgroundColor: "#CE1212", border: "1px solid #CE1212" }}
                    handleStyle={[
                      { backgroundColor: "#ffffff", border: "3px solid #CE1212", height: "18px", width: "18px" },
                    ]}
                    trackStyle={[{ backgroundColor: "#CE1212", height: "6px" }]}
                  />
                </div>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>
        <div className="generate-button-wrapper ">
          <div className="d-flex justify-content-center align-items-center">
            <a href={getGenerateUrl(composer, numNotes)} className="generate-button">
              <span onClick={handleGenerateClick}>Generate</span>
            </a>
            {/* <div onClick={handleGenerateClick} className="generate-button">Generate</div> */}

            {isLoading && (
              <div className="loading-gif">
                <img src="/assets/images/Skateboarding.gif"></img>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
