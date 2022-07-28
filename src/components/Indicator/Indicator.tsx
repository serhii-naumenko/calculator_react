import React, { useState } from 'react';
import './Indicator.scss';

export function Indicator() {
  const [currentValue, setCurrentValue] = useState('default');
  const handlerChangeCurrency = (value: string) => {
    setCurrentValue(value);
  };

  return (
    <div className="Indicator">
      <select
        title="select currency"
        name="currency"
        className="Indicator__currency"
        value={currentValue}
        onChange={(event) => handlerChangeCurrency(event.target.value)}
      >
        <option
          value="default"
          className="Indicator__currency-item"
          disabled
        >
          Choose a currency
        </option>
        <option
          value="USD"
          className="Indicator__currency-item"
        >
          USD
        </option>
        <option
          value="EUR"
          className="Indicator__currency-item"
        >
          EUR
        </option>
        <option
          value="HUA"
          className="Indicator__currency-item"
        >
          HUA
        </option>
      </select>
      <input
        type="text"
        className="Indicator__input"
        name="amount"
        placeholder="enter amount"
      />
    </div>
  );
}
