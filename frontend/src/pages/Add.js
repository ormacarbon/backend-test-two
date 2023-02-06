import React, { useContext, useState } from 'react';
import BeerForm from '../components/BeerForm';
import { useNavigate } from 'react-router-dom';
import BeerContext from '../context/BeerContext';

export default function Add() {
	const [name, setName] = useState('');
	const [category, setCategory] = useState('');
	const [description, setDescription] = useState('');
	const [address, setAddress] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [country, setCountry] = useState('');
	const [website, setWebsite] = useState('');
	const [ABV, setABV] = useState(0);
	const [IBU, setIBU] = useState(0);
	const [coordinates, setCoordinates] = useState([0, 0]);

	const { listBeer } = useContext(BeerContext);

	const navigate = useNavigate();

	const addNewBeer = (e) => {
		e.preventDefault();

		try {
			const aux = JSON.parse(coordinates);
			const aux2 = JSON.parse(ABV);
			const aux3 = JSON.parse(IBU);
	
			fetch('http://localhost:3001/beer/add', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, category, description, address, city, state, country, website, abv: aux2, ibu: aux3, coordinates: aux })
			}).then((response) => {
				if (response.status === 201) {
					listBeer();
					navigate('/');
				} else {
					window.alert('Something went wrong.');
				}
			});
		} catch (error) {
			window.alert('Type valid coordinates, following the example.');
		}
	};

	return (
		<div>
			<BeerForm
				setName={setName}
				setCategory={setCategory}
				setDescription={setDescription}
				setAddress={setAddress}
				setCity={setCity}
				setState={setState}
				setCountry={setCountry}
				setWebsite={setWebsite}
				setABV={setABV}
				setIBU={setIBU}
				setCoordinates={setCoordinates}
				addNewBeer={addNewBeer}
				buttonText={'Add new beer'}
			/>
		</div>
	);
}
