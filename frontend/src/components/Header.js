import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { func } from 'prop-types';
import BeerContext from '../context/BeerContext';

export default function Header({ reset }) {
	const { filter, setFilter, setBeers } = useContext(BeerContext);

	const searchBeer = () => {
		fetch(`http://localhost:3001/beer/filter?name=${filter}`)
			.then(response => response.json())
			.then(json => setBeers(json));
	};

	return (
		<header>
			<Form>
				<Form.Group style={{ display: 'flex' }}>
					<Form.Control type="text" placeholder="Type beer name" value={filter} onChange={({ target }) => setFilter(target.value)} />
					<Button onClick={searchBeer}>Search</Button>
					<Button onClick={reset}>Reset</Button>
				</Form.Group>
			</Form>
		</header>
	);
}

Header.propTypes = {
	reset: func.isRequired,
};
