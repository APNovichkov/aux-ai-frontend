import React from 'react';

const About = (props) => {
    return (
        <div className="about-us-wrapper">
        <div className="about-us-title-wrapper text-center">
          <div className="about-us-title">What is Aux.ai?</div>
          <div className="about-us-subtitle">Our Story</div>
        </div>
        <div className="about-us-main-text-wrapper text-center">
          <div className="about-us-main-text">
            Aux.ai was born when I first saw the <a href="https://www.youtube.com/watch?v=3UwLhqcZqxc">Travis Scott AI</a> video. I was fascinated by what was possible with AI, and having studied Data Science and Deep Learning at my university, I wanted to take a shot at this problem.{" "}
             
            <span className="about-us-main-text-highlight">
            {" "}Aux.ai lets you generate music of different lengths in the style of different composers and play the result right in the application.
            </span>{" "}
            The model which Aux.ai is based on is an LSTM model, and has 2 LSTM layers, 1 Attention layer, and 2 Dense layers. The model was trained on hundreds MIDI music files of different pieces by Chopin, Rachmaninov and Tchaikovsky. 
            This is the first version of this project, and I am looking into using a true attention model in the future, as well as adding more composers and styles!
            <br />
            <br />
            I hope you get the chance to check out the project, and if you want, support its development.<br />
            Happy Creating!! 🚀
          </div>
        </div>
        <div className="about-us-team-wrapper">
          <div className="text-center">
            <div className="about-us-team-title">About the Team</div>
            <div className="about-us-team-subtitle">Who Builds Aux.ai</div>
          </div>

          <div className="about-us-andrey d-flex justify-content-center align-items-center">
            <img src="/assets/images/Profile_picture.jpg" className="about-us-andrey-img" alt="andrey-image"></img>
            <div>
              <div className="about-us-andrey-title">Andrey Novichkov</div>
              <div className="about-us-andrey-subtitle">Full-Stack Software Engineer</div>
              <div className="d-flex justify-content-left">
                <a href="https://www.github.com/APNovichkov" className="about-us-andrey-link">
                  <span className="fab fa-github"></span>
                </a>
                <a href="https://www.linkedin.com/in/andrey-novichkov/" className="about-us-andrey-link">
                  <span className="fab fa-linkedin"></span>
                </a>
                <a href="https://www.makeschool.com/portfolio/andrey-novichkov" className="about-us-andrey-link">
                  Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default About;