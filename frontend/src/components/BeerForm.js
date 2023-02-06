import React from 'react';
import { Form } from 'react-bootstrap';

export default function BeerForm() {
	return (
		<Form>
			<Form.Control className="mb-4" type="text" placeholder="Name" onChange={() => 'oi'} />
			<Form.Control className="mb-4" type="text" placeholder="Category" onChange={() => 'oi'} />
			<Form.Control className="mb-4" type="text" placeholder="Description" onChange={() => 'oi'} />
			<Form.Control className="mb-4" type="text" placeholder="Address" onChange={() => 'oi'} />
			<Form.Control className="mb-4" type="text" placeholder="City" onChange={() => 'oi'} />
			<Form.Control className="mb-4" type="text" placeholder="State" onChange={() => 'oi'} />
			<Form.Control className="mb-4" type="text" placeholder="Country" onChange={() => 'oi'} />
			<Form.Control className="mb-4" type="text" placeholder="Website" onChange={() => 'oi'} />
			<Form.Control className="mb-4" type="number" placeholder="ABV" onChange={() => 'oi'} />
			<Form.Control className="mb-4" type="number" placeholder="IBU" onChange={() => 'oi'} />
			<Form.Control className="mb-4" type="number" placeholder="Coordinates" onChange={() => 'oi'} />
		</Form>
	);
}
