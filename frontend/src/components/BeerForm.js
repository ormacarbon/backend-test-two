import React, { useContext } from 'react';
import { func, string } from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import BeerContext from '../context/BeerContext';

export default function BeerForm({ onSubmit, buttonText }) {
	const location = useLocation();

	const { form, setForm } = useContext(BeerContext);

	const handleInputs = ({ target }) => setForm(prev => ({ ...prev, [target.name]: target.value }));

	const handleDefaultValue = (field) => location.pathname.includes('update') ? form[field] : '';

	return (
		<Form className="beer-form" onSubmit={onSubmit}>
			<Form.Control
				required
				onChange={handleInputs}
				name="name"
				placeholder="Name"
				defaultValue={handleDefaultValue('name')}
			/>
			<Form.Control
				required
				onChange={handleInputs}
				name="category"
				placeholder="Category"
				defaultValue={handleDefaultValue('category')}
			/>
			<Form.Control
				required
				onChange={handleInputs}
				name="description"
				placeholder="Description"
				defaultValue={handleDefaultValue('description')}
				as="textarea"
			/>
			<Form.Control
				required
				onChange={handleInputs}
				name="address"
				placeholder="Address"
				defaultValue={handleDefaultValue('address')}
			/>
			<Form.Control
				required
				onChange={handleInputs}
				name="city"
				placeholder="City"
				defaultValue={handleDefaultValue('city')}
			/>
			<Form.Control
				required
				onChange={handleInputs}
				name="state"
				placeholder="State"
				defaultValue={handleDefaultValue('state')}
			/>
			<Form.Control
				required
				onChange={handleInputs}
				name="country"
				placeholder="Country"
				defaultValue={handleDefaultValue('country')}
			/>
			<Form.Control
				required
				onChange={handleInputs}
				name="website"
				placeholder="Website"
				defaultValue={handleDefaultValue('website')}
			/>
			<Form.Control
				required
				onChange={handleInputs}
				name="abv"
				placeholder="ABV"
				defaultValue={handleDefaultValue('abv')}
				type="number"
				step="0.01"
			/>
			<Form.Control
				required
				onChange={handleInputs}
				name="ibu"
				placeholder="IBU"
				defaultValue={handleDefaultValue('ibu')}
				type="number"
			/>
			<Form.Control
				required
				onChange={handleInputs}
				name="coordinates"
				placeholder="Coordinates: [-16.68, -49.25]"
				defaultValue={handleDefaultValue('coordinates')}
			/>
			<Button variant="success" type="submit">{buttonText}</Button>
		</Form>
	);
}

BeerForm.propTypes = {
	onSubmit: func.isRequired,
	buttonText: string.isRequired
};
