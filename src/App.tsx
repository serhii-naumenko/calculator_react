import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Calculator } from './components/Calculator';
import { Converter } from './components/Converter';
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
          <Route path="/converter" element={<Converter />} />
          <Route path="/" element={<Calculator />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
