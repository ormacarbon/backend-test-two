import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Stock from './pages/Stock';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/beers" element={ <Stock /> } />
    </Routes>
  );
}

export default App;