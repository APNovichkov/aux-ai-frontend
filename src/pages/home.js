import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Import Utils
import { getSampleMp3Url } from './../utils/urlUtils';

// Import Components
import SamplePlayer from "./../components/samplePlayer";

const Home = (props) => {
	const [selectedComposer, setSelectedComposer] = useState('chopin');
	const [toPlay, setToPlay] = useState(false);
  
  const handleComposerClick = (composer) => {
		console.log('Handling composer click: ', composer);

    if (composer === selectedComposer){
      setToPlay(!toPlay);
    }else{
      setToPlay(true);
    }
    
    setSelectedComposer(composer);
	};

  // useEffect(() => {
  //   var x = document.getElementById('myAudio');

  //   if(toPlay){
  //     x.play()
  //   }else{
  //     x.pause()
  //   }
  // }, [toPlay])

	return (
		<div className="home-wrapper">
			<div className="home">
				<div className="row">
					<div className="col-md-1"></div>
					<div className="col-md-10">
						<div className="hero-text text-center">
							AI Generated Music in the Style of{' '}
							<span className="blue-text word">
								<span>Chopin</span>
								<span>Tchaikovsky</span>
								<span>Rachmaninov</span>
							</span>
						</div>
						<div className="hero-action">
							<div className="d-flex justify-content-center align-items-center">
								<Link to="/create" className="compose-button hero-action-item">
									Go Create
								</Link>
							</div>
						</div>
					</div>
					<div className="col-md-1"></div>
				</div>

				<div className="composers-wrapper text-center">
					<div className="composers">
						<span className="fas fa-user"></span> Composers
					</div>
					<div className="composers-description">
						The behind the scenes Deep Learning model was trained on musical pieces of these composers,
						focusing on the piano part in the training MIDI files. Click each card to hear a sample of what
						the model generated.
					</div>
					<div className="composer-list-wrapper">
						<div className="row">
							<div className="col-md-2"></div>
							<div className="col-md-8">
								<div className="row">
									<div className="col-xl-4">
										<div onClick={() => handleComposerClick('chopin')} className="composer-item">
											{toPlay && selectedComposer === 'chopin' ? (
												<span className="far fa-stop-circle"></span>
											) : (
												<span className="far fa-play-circle"></span>
											)}{' '}
											Chopin
										</div>
                    <SamplePlayer toPlay={selectedComposer === "chopin" && toPlay} composer={"chopin"} url={getSampleMp3Url('chopin')}/>
									</div>
									<div className="col-xl-4">
										<div
											onClick={() => handleComposerClick('rachmaninov')}
											className="composer-item"
										>
											{toPlay && selectedComposer === 'rachmaninov' ? (
												<span className="far fa-stop-circle"></span>
											) : (
												<span className="far fa-play-circle"></span>
											)}{' '}
											Rachmaninov
										</div>
                    <SamplePlayer toPlay={selectedComposer === "rachmaninov" && toPlay} composer={"rachmaninov"} url={getSampleMp3Url('rachmaninov')}/>
									</div>
									<div className="col-xl-4">
                  <div
											onClick={() => handleComposerClick('tchaikovsky')}
											className="composer-item"
										>
											{toPlay && selectedComposer === 'tchaikovsky' ? (
												<span className="far fa-stop-circle"></span>
											) : (
												<span className="far fa-play-circle"></span>
											)}{' '}
											Tchaikovsky
										</div>
                    <SamplePlayer toPlay={selectedComposer === "tchaikovsky" && toPlay} composer={"tchaikovsky"} url={getSampleMp3Url('tchaikovsky')}/>
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
