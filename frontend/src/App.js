import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import BeerCard from './components/BeerCard';
import { Button, Form } from 'react-bootstrap';

function App() {
	const [beers, setBeers] = useState([]);
	const [filter, setFilter] = useState('');

	const listBeer = () => {
		const skip = Math.floor(Math.random() * 5001);

		fetch(`http://localhost:3001/beer/list/100/${skip}`)
			.then(response => response.json())
			.then(json => setBeers(json));
	};

	useEffect(() => listBeer, []);

	const searchBeer = () => {
		fetch(`http://localhost:3001/beer/filter?name=${filter}`)
			.then(response => response.json())
			.then(json => setBeers(json));
	};

	const reset = () => {
		setFilter('');
		listBeer();
	};

	return (
		<div>
			<header>
				<Form>
					<Form.Group style={{ display: 'flex' }}>
						<Form.Control type="text" placeholder="Type beer name" value={filter} onChange={({ target }) => setFilter(target.value)} />
						<Button onClick={searchBeer}>Search</Button>
						<Button onClick={reset}>Reset</Button>
					</Form.Group>
				</Form>
			</header>
			<main>
				{beers.map(beer => <BeerCard key={beer._id} beer={beer} />)}
			</main>
		</div>
	);
}

export default App;
