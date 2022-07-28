import React from 'react';
import './Convertor.scss';
import { Indicator } from '../Indicator';

export function Convertor() {
  return (
    <div className="Convertor">
      <Indicator />
      <select
        title="shoose an action"
        name="action"
        className="Convertor__actions"
      >
        <option
          value="buy"
          className="Convertor__action-item"
        >
          Buy
        </option>
        <option
          value="sell"
          className="Convertor__action-item"
        >
          Sell
        </option>
      </select>
      <Indicator />
    </div>
  );
}
