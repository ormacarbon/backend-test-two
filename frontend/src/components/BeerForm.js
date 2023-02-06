import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { func, string } from 'prop-types';

export default function BeerForm({ setName, setCategory, setDescription, setAddress, setCity, setState, setCountry, setWebsite, setABV, setIBU, setCoordinates, addNewBeer, buttonText }) {
	return (
		<Form onSubmit={addNewBeer}>
			<Form.Control required className="mb-4" type="text" placeholder="Name" onChange={({ target }) => setName(target.value)} />
			<Form.Control required className="mb-4" type="text" placeholder="Category" onChange={({ target }) => setCategory(target.value)} />
			<Form.Control required className="mb-4" type="text" placeholder="Description" onChange={({ target }) => setDescription(target.value)} />
			<Form.Control required className="mb-4" type="text" placeholder="Address" onChange={({ target }) => setAddress(target.value)} />
			<Form.Control required className="mb-4" type="text" placeholder="City" onChange={({ target }) => setCity(target.value)} />
			<Form.Control required className="mb-4" type="text" placeholder="State" onChange={({ target }) => setState(target.value)} />
			<Form.Control required className="mb-4" type="text" placeholder="Country" onChange={({ target }) => setCountry(target.value)} />
			<Form.Control required className="mb-4" type="text" placeholder="Website" onChange={({ target }) => setWebsite(target.value)} />
			<Form.Control required className="mb-4" type="number" step="0.01" placeholder="ABV" onChange={({ target }) => setABV(target.value)} />
			<Form.Control required className="mb-4" type="number" placeholder="IBU" onChange={({ target }) => setIBU(target.value)} />
			<Form.Control required className="mb-4" type="text" placeholder="Coordinates: [-16.68, -49.25]" onChange={({ target }) => setCoordinates(target.value)} />
			<Button type="submit">{buttonText}</Button>
		</Form>
	);
}

BeerForm.propTypes = {
	setName: func.isRequired,
	setCategory: func.isRequired,
	setDescription: func.isRequired,
	setAddress: func.isRequired,
	setCity: func.isRequired,
	setState: func.isRequired,
	setCountry: func.isRequired,
	setWebsite: func.isRequired,
	setABV: func.isRequired,
	setIBU: func.isRequired,
	setCoordinates: func.isRequired,
	addNewBeer: func.isRequired,
	buttonText: string.isRequired
};
