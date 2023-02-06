import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import BeerContext from '../context/BeerContext';
import BeerCard from '../components/BeerCard';
import Header from '../components/Header';

export default function Home() {
	const { beers, setFilter, listBeer } = useContext(BeerContext);

	const reset = () => {
		setFilter('');
		listBeer();
	};

	return (
		<div>
			<Header reset={reset} />
			<Link to="/add">+</Link>
			<main>
				{beers.length === 0 ? 'No results.' : beers.map(beer => <BeerCard key={beer._id} beer={beer} reset={reset} />)}
			</main>
		</div>
	);
}
