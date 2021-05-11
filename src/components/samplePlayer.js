import React, { useEffect } from 'react';

const SamplePlayer = (props) => {
	let { toPlay, composer, url } = props;

	useEffect(() => {
		console.log('From Sample Player');
        var x = document.getElementById(`${composer}Audio`);

		if (toPlay) {
			x.play();
		} else {
			x.pause();
		}
	}, [toPlay]);

	return (
		<audio id={`${composer}Audio`} className="sample-audio-player">
			<source src={url} />
		</audio>
	);
};

export default SamplePlayer;
