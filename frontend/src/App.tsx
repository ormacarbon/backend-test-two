import React from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/create';
import List from './pages/list';
import Read from './pages/read';

function App() {
  return (
    <div className='main'>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path="/list" element={<List />} />
        <Route path='/read/:id' element={<Read />} />
        
      </Routes>
    </div>
  );
}

export default App;
