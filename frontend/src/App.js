import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import BeerProvider from './context/BeerProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Add from './pages/Add';
import Update from './pages/Update';
import Details from './pages/Details';

function App() {
	return (
		<BeerProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/add' element={<Add />} />
					<Route path='/update/:id' element={<Update />} />
					<Route path='/details/:id' element={<Details />} />
				</Routes>
			</BrowserRouter>
		</BeerProvider>
	);
}

export default App;
