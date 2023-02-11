import React from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/create';

function App() {
  return (
    <div className='main'>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
