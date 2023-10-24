// ImageDetailsPage.jsx
import React from 'react';

function ImageDetailsPage({ artwork, onBackClick }) {
	return (
		<div className="image-details">
			<h2>{artwork.title}</h2>
			<h3>{artwork.artist_title}</h3>
			<img
				alt={artwork.thumbnail.alt_text}
				src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/300,/0/default.jpg`}
			/>
			<button onClick={onBackClick}>Back to results</button>
		</div>
	);
}

export default ImageDetailsPage;
