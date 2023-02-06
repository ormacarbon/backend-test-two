import React, { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { func, string } from 'prop-types';
import BeerContext from '../context/BeerContext';
import { useLocation } from 'react-router-dom';

export default function BeerForm({ onSubmit, buttonText }) {
	const { form, setForm } = useContext(BeerContext);

	const location = useLocation();
	
	const handleInputs = ({ target }) => setForm(prev => ({ ...prev, [target.name]: target.value }));

	const handleDefaultValue = (field) => location.pathname.includes('update') ? form[field] : '';

	return (
		<Form onSubmit={onSubmit}>
			<Form.Control
				defaultValue={handleDefaultValue('name')}
				required
				className="mb-4"
				placeholder="Name"
				name="name"
				onChange={handleInputs}
			/>
			<Form.Control
				defaultValue={handleDefaultValue('category')}
				required
				className="mb-4"
				placeholder="Category"
				name="category"
				onChange={handleInputs}
			/>
			<Form.Control
				defaultValue={handleDefaultValue('description')}
				required
				className="mb-4"
				placeholder="Description" as="textarea"
				name="description"
				onChange={handleInputs}
			/>
			<Form.Control
				defaultValue={handleDefaultValue('address')}
				required
				className="mb-4"
				placeholder="Address"
				name="address"
				onChange={handleInputs}
			/>
			<Form.Control
				defaultValue={handleDefaultValue('city')}
				required
				className="mb-4"
				placeholder="City"
				name="city"
				onChange={handleInputs}
			/>
			<Form.Control
				defaultValue={handleDefaultValue('state')}
				required
				className="mb-4"
				placeholder="State"
				name="state"
				onChange={handleInputs}
			/>
			<Form.Control
				defaultValue={handleDefaultValue('country')}
				required
				className="mb-4"
				placeholder="Country"
				name="country"
				onChange={handleInputs}
			/>
			<Form.Control
				defaultValue={handleDefaultValue('website')}
				required
				className="mb-4"
				placeholder="Website"
				name="website"
				onChange={handleInputs}
			/>
			<Form.Control
				defaultValue={handleDefaultValue('abv')}
				required
				className="mb-4"
				type="number" step="0.01" placeholder="ABV"
				name="abv"
				onChange={handleInputs}
			/>
			<Form.Control
				defaultValue={handleDefaultValue('ibu')}
				required
				className="mb-4"
				type="number" placeholder="IBU"
				name="ibu"
				onChange={handleInputs}
			/>
			<Form.Control
				defaultValue={handleDefaultValue('coordinates')}
				required
				className="mb-4"
				placeholder="Coordinates: [-16.68, -49.25]"
				name="coordinates"
				onChange={handleInputs}
			/>
			<Button type="submit">{buttonText}</Button>
		</Form>
	);
}

BeerForm.propTypes = {
	onSubmit: func.isRequired,
	buttonText: string.isRequired
};
