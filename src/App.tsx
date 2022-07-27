import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Calculator } from './components/Calculator';
import { Convertor } from './components/Convertor';
import './App.scss';
import { NotFound } from './components/NotFound';

export function App() {
  return (
    <div className="App">
      <nav className="App__nav nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink
              className={({ isActive }) => (isActive
                ? 'nav__link--active'
                : 'nav__link'
              )}
              to="calculator"
            >
              Calculator
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              className={({ isActive }) => (isActive
                ? 'nav__link--active'
                : 'nav__link'
              )}
              to="convertor"
            >
              Convertor
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              className={({ isActive }) => (isActive
                ? 'nav__link--active'
                : 'nav__link'
              )}
              to="about"
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="main">
        <Routes>
          <Route path="calculator" element={<Calculator />} />
          <Route path="convertor" element={<Convertor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
