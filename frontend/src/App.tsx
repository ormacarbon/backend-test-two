import React from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/create';
import List from './pages/list';
import Read from './pages/read';
import Update from './pages/update';

function App() {
  return (
    <div className='main'>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path="/list" element={<List />} />
        <Route path='/read/:id' element={<Read />} />
        <Route path='/update/:id' element={<Update />} />

      </Routes>
    </div>
  );
}

export default App;
