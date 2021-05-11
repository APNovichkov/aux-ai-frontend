import React, { useState } from 'react';
import axios from 'axios';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

// Import Components
import LoadingCard from './../components/loadingCard';
import PlayerCard from '../components/playerCard';

// Import utils
import { getGenerateUrl } from './../utils/urlUtils';


const Create = (props) => {
	const [composer, setComposer] = useState('chopin');
	const [numNotes, setNumNotes] = useState(250);
	const [fileId, setFileId] = useState('');

	// Page Navigation
	const [isLoading, setIsLoading] = useState(false);

	const handleGenerateClick = (event) => {
		console.log('Generating music');
		setFileId(null);
		setIsLoading(true);
		axios
			.get(getGenerateUrl(composer, numNotes))
			.then((res) => {
				console.log('res: ', res.data);
				setFileId(res.data.song_id);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log('err: ', err);
				setIsLoading(false);
			});
	};

	const playMusic = () => {
		const audioEl = document.getElementsByClassName('audio-element')[0];
		audioEl.play();
	};

	return (
		<div className="create-wrapper">
			<div className="create text-center">
				<div className="composer-prompt-wrapper">
					<div className="composer-prompt">
						Choose a <span className="blue-text">Composer</span>
					</div>
					<div className="composer-choices">
						<div className="row">
							<div className="col-md-2"></div>
							<div className="col-md-8">
								<div className="row">
									<div className="col-xl-4">
										<div
											onClick={() => setComposer('chopin')}
											className={`composer-choice ${composer === 'chopin' && 'selected'}`}
										>
											Chopin
										</div>
									</div>
									<div className="col-xl-4">
										<div
											onClick={() => setComposer('rachmaninov')}
											className={`composer-choice ${composer === 'rachmaninov' && 'selected'}`}
										>
											Rachmaninov
										</div>
									</div>
									<div className="col-xl-4">
										<div
											onClick={() => setComposer('tchaikovsky')}
											className={`composer-choice ${composer === 'tchaikovsky' && 'selected'}`}
										>
											Tchaikovsky
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-2"></div>
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
										railStyle={{ backgroundColor: '#000D6F', height: '6px' }}
										dotStyle={{ backgroundColor: '#439dec', border: '1px solid #000D6F' }}
										activeDotStyle={{ backgroundColor: '#439dec', border: '1px solid #000D6F' }}
										handleStyle={[
											{
												backgroundColor: '#ffffff',
												border: '3px solid #000D6F',
												height: '18px',
												width: '18px',
											},
										]}
										trackStyle={[{ backgroundColor: '#439dec', height: '6px' }]}
										defaultValue={250}
									/>
								</div>
							</div>
							<div className="col-md-3"></div>
						</div>
					</div>
				</div>
				{fileId && (
          <PlayerCard fileId={fileId} setFileId={setFileId} composer={composer} numNotes={numNotes}/>
				)}

				<div className="generate-button-wrapper ">
					<div className="d-flex justify-content-center align-items-center">
						<div onClick={(event) => handleGenerateClick(event)} className="generate-button">
							Generate
						</div>
					</div>
				</div>
				{isLoading && <LoadingCard />}
      </div>
		</div>
	);
};

export default Create;
