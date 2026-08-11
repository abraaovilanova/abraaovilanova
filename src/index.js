import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App';
import Folder from './pages/Folder';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Folder />} />
      <Route path='/cv' element={<App />} />
    </Routes>
  </BrowserRouter>,
);
