import React, { useContext, useEffect } from 'react';
import BeerCard from '../components/BeerCard';
import Header from '../components/Header';
import BeerContext from '../context/BeerContext';

export default function Home() {
	const { beers, setBeers, setFilter } = useContext(BeerContext);

	const listBeer = () => {
		const skip = Math.floor(Math.random() * 5001);

		fetch(`http://localhost:3001/beer/list/100/${skip}`)
			.then(response => response.json())
			.then(json => setBeers(json));
	};

	useEffect(() => listBeer, []);

	const reset = () => {
		setFilter('');
		listBeer();
	};

	return (
		<div>
			<Header reset={reset} />
			<main>
				{beers.length === 0 ? 'No results.' : beers.map(beer => <BeerCard key={beer._id} beer={beer} reset={reset} />)}
			</main>
		</div>
	);
}
