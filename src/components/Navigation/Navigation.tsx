import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

export function Navigation() {
  return (
    <div className="Navigation">
      <ul className="Navigation__list">
        <li className="Navigation__item">
          <NavLink
            className={({ isActive }) => (isActive
              ? 'Navigation__link--active'
              : 'Navigation__link'
            )}
            to="/"
          >
            Calculator
          </NavLink>
        </li>
        <li className="Navigation__item">
          <NavLink
            className={({ isActive }) => (isActive
              ? 'Navigation__link--active'
              : 'Navigation__link'
            )}
            to="/converter"
          >
            Converter
          </NavLink>
        </li>
        <li className="Navigation__item">
          <NavLink
            className={({ isActive }) => (isActive
              ? 'Navigation__link--active'
              : 'Navigation__link'
            )}
            to="/aboutus"
          >
            About us
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
