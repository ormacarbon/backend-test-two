import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BeerContext from '../context/BeerContext';
import BeerForm from '../components/BeerForm';

export default function Update() {
	const location = useLocation();
	const navigate = useNavigate();

	const { form, listBeer } = useContext(BeerContext);

	const updateBeer = (e) => {
		e.preventDefault();

		const id = location.pathname.replace('/update/', '');

		const aux = JSON.parse(form.coordinates);
		const aux2 = JSON.parse(form.abv);
		const aux3 = JSON.parse(form.ibu);

		fetch(`http://localhost:3001/beer/update/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ ...form, abv: aux2, ibu: aux3, coordinates: aux })
		}).then(response => {
			if (response.status === 200) {
				listBeer();
				navigate('/');
			}
			else window.alert('Something went wrong.');
		});
	};

	return (
		<div>
			<BeerForm
				onSubmit={updateBeer}
				buttonText={'Update beer'}
			/>
		</div>
	);
}
