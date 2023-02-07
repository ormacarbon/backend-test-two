import React, { useContext, useEffect } from 'react';
import { func } from 'prop-types';
import { Button, ButtonGroup, Form } from 'react-bootstrap';
import BeerContext from '../context/BeerContext';

export default function Header({ reset }) {
	const { filter, setFilter, setBeers } = useContext(BeerContext);

	useEffect(() => () => setFilter(''), []);

	const searchBeer = () => {
		fetch(`http://localhost:3001/beer/filter?name=${filter}`)
			.then(response => response.json())
			.then(json => setBeers(json));
	};

	return (
		<header>
			<Form>
				<Form.Group style={{}}>
					<Form.Control type="text" placeholder="Type beer name" value={filter} onChange={({ target }) => setFilter(target.value)} />
					<ButtonGroup style={{ width: '100%', marginTop: '5px' }}>
						<Button variant="light" onClick={searchBeer}>Search</Button>
						<Button variant="light" onClick={reset}>Reset</Button>
					</ButtonGroup>
				</Form.Group>
			</Form>
		</header>
	);
}

Header.propTypes = {
	reset: func.isRequired,
};
