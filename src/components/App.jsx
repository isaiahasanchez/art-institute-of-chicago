import { useState } from 'react';

import { searchArtworks } from '../api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';
import ImageDetailsPage from './ImageDetailsPage';

import './App.css';

export function App() {
	const [artworks, setArtworks] = useState([]);
	const [selectedArtwork, setSelectedArtwork] = useState(null);

	function onArtworkClick(artwork) {
		setSelectedArtwork(artwork);
	}

	function onBackClick() {
		setSelectedArtwork(null);
	}

	function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/api.js
		searchArtworks(query).then((json) => {
			if (json && json.data) {
				setArtworks(json.data);
			}
		});
	}

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			<SearchForm onSearchSubmit={onSearchSubmit} />
			<div className="results">
				{selectedArtwork ? (
					<ImageDetailsPage
						artwork={selectedArtwork}
						onBackClick={onBackClick}
					/>
				) : (
					artworks.map((artwork) => (
						<div key={artwork.image_id}>
							<a
								className="artwork-title"
								href="#"
								onClick={(e) => {
									e.preventDefault();
									onArtworkClick(artwork);
								}}
							>
								{artwork.title}
							</a>

							<h5>{artwork.artist_title}</h5>
						</div>
					))
				)}
			</div>
			<Footer />
		</div>
	);
}
