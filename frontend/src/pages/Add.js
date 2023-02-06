import React, { useContext, useEffect } from 'react';
import BeerForm from '../components/BeerForm';
import { useNavigate } from 'react-router-dom';
import BeerContext from '../context/BeerContext';

export default function Add() {
	const { listBeer, form } = useContext(BeerContext);

	const navigate = useNavigate();

	useEffect(() => {
		
	}, []);

	const addNewBeer = (e) => {
		e.preventDefault();

		try {
			const aux = JSON.parse(form.coordinates);
			const aux2 = JSON.parse(form.abv);
			const aux3 = JSON.parse(form.ibu);

			fetch('http://localhost:3001/beer/add', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ ...form, abv: aux2, ibu: aux3, coordinates: aux })
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
				onSubmit={addNewBeer}
				buttonText={'Add new beer'}
			/>
		</div>
	);
}
