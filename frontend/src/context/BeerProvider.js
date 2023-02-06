import React, { useEffect, useState } from 'react';
import BeerContext from './BeerContext';
import {node} from 'prop-types';

export default function BeerProvider({ children }) {
	const [beers, setBeers] = useState([]);
	const [filter, setFilter] = useState('');

	const listBeer = () => {
		const skip = Math.floor(Math.random() * 5001);

		fetch(`http://localhost:3001/beer/list/100/${skip}`)
			.then(response => response.json())
			.then(json => setBeers(json));
	};

	useEffect(() => listBeer, []);

	const valueObject = {
		beers,
		setBeers,
		filter,
		setFilter,
		listBeer,
	};

	return (
		<BeerContext.Provider value={valueObject}>
			{children}
		</BeerContext.Provider>
	);
}

BeerProvider.propTypes = {
	children: node.isRequired
};
