import React, { useState } from 'react';
import BeerContext from './BeerContext';
import {node} from 'prop-types';

export default function BeerProvider({ children }) {
	const [beers, setBeers] = useState([]);
	const [filter, setFilter] = useState('');

	const valueObject = {
		beers,
		setBeers,
		filter,
		setFilter,
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
