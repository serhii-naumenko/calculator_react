import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Calculator } from './components/Calculator';
import { Convertor } from './components/Convertor';
import './App.scss';
import { NotFound } from './components/NotFound';
import { Navigation } from './components/Navigation';

export function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="main">
        <Routes>
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/convertor" element={<Convertor />} />
          <Route path="/" element={<Calculator />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
