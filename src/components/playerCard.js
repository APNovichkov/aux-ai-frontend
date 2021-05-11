import React from 'react';

// Import components
import { getMp3FileUrl } from './../utils/urlUtils';

const PlayerCard = (props) => {
	let { fileId, setFileId, composer, numNotes } = props;

    const handleClose = () => {
        setFileId(null);
    }

	return (
		<div>
			<div className="card-overlay"></div>
			<div className="overlay-card-wrapper">
				<div className="overlay-card">
                    <div className="header">Here is your unique song!</div>
                    <div className="description">{numNotes} notes by {composer.charAt(0).toUpperCase() + composer.slice(1)}</div>
					<audio controls className="audio-element">
						<source src={getMp3FileUrl(fileId)}></source>
					</audio>
                    <div className="generate-more-wrapper d-flex justify-content-center">
                        <div onClick={handleClose} className="generate-more-button">Generate More</div>
                    </div>
				</div>
			</div>
		</div>
	);
};

export default PlayerCard;
