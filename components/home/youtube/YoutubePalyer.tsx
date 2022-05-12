import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

interface Props {
	id: string;
	title: string;
	onClick: () => void;
}

const YoutubePlayer = ({ id, title, onClick }: Props) => {
	return (
		<div>
			<LiteYouTubeEmbed
				id={id}
				onIframeAdded={onClick}
				title={title}
			/>
		</div>
	);
};

export default YoutubePlayer;