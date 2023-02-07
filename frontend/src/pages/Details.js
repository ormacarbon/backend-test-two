import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Details() {
	const { id } = useParams();

	const [beer, setBeer] = useState();

	useEffect(() => {
		fetch(`http://localhost:3001/beer/${id}`).then(response => response.json()).then(json => setBeer(json));
	}, []);

	if (beer) return (
		<div className="details-container">
			<h1>Name: {beer.name}</h1>
			<p>Category: {beer.category}</p>
			<p>Description: {beer.description}</p>
			<p>Address: {beer.address}</p>
			<p>City: {beer.city}</p>
			<p>State: {beer.state}</p>
			<p>Country: {beer.country}</p>
			<p>Website: <a href={beer.website} target="_blank" rel="noreferrer">{beer.website}</a></p>
			<p>ABV: {beer.abv.toFixed(2)}%</p>
			<p>IBU: {beer.ibu}</p>
			<p>Coordinates: {JSON.stringify(beer.coordinates)}</p>
		</div>
	);
}
