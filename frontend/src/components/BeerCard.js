import React, { useContext } from 'react';
import { shape, string, number, arrayOf, func } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import BeerContext from '../context/BeerContext';

export default function BeerCard({ beer, reset }) {
	const navigate = useNavigate();
	
	const { setForm } = useContext(BeerContext);

	const updateBeer = () => {
		setForm({
			name: beer.name,
			category: beer.category,
			description: beer.description,
			address: beer.address,
			city: beer.city,
			state: beer.state,
			country: beer.country,
			website: beer.website,
			abv: beer.abv,
			ibu: beer.ibu,
			coordinates: `[${beer.coordinates}]`
		});
		
		navigate(`/update/${beer._id}`);
	};
	
	const deleteBeer = (id) => {
		fetch(`http://localhost:3001/beer/delete/${id}`, { method: 'DELETE' });
		reset();
	};

	return (
		<Card>
			<Card.Title>{beer.name}</Card.Title>
			<Card.Subtitle className="mb-4 text-muted">{beer.category ? beer.category : 'No category available'}</Card.Subtitle>
			<Card.Text>{`ABV: ${beer.abv.toFixed(2)}%`}</Card.Text>
			<Card.Text>{`IBU: ${beer.ibu}`}</Card.Text>
			<Card.Text>{`${beer.city} - ${beer.country}`}</Card.Text>
			<Button onClick={() => updateBeer(beer._id)}>Update</Button>
			<Button onClick={() => deleteBeer(beer._id)}>Delete</Button>
			<Card.Link href={`/details/${beer._id}`}>More info</Card.Link>
		</Card>
	);
}

BeerCard.propTypes = {
	beer: shape({
		abv: number,
		address: string,
		category: string,
		city: string,
		coordinates: arrayOf(number),
		country: string,
		description: string,
		ibu: number,
		name: string,
		state: string,
		website: string
	}).isRequired,
	reset: func.isRequired,
};
