import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectors,
  setChosenCurrency2,
  setValue1,
  setValue2,
} from '../../redux/reducer';
import './Indicator.scss';

type Props = {
  category: string,
  calculatevalue: () => void;
}

export function Indicator({ category, calculatevalue }: Props) {
  const currentCurrency2 = useSelector(selectors.getChosenCurrency2);
  const firstValue = useSelector(selectors.getValue1);
  const secondValue = useSelector(selectors.getValue2);
  const dispatch = useDispatch();

  const handlerChangeCurrency = useCallback((value: string) => {
    if (category === 'second') {
      dispatch(setChosenCurrency2(value));
    }
    calculatevalue();

    // eslint-disable-next-line no-console
    console.log(`curInd2=${currentCurrency2}`);
  }, [currentCurrency2, firstValue, secondValue]);

  const handlerChangeValue1 = useCallback((newValue1: string) => {
    dispatch(setValue1(newValue1));
    calculatevalue();
  }, [currentCurrency2, firstValue, secondValue]);

  const handlerChangeValue2 = useCallback((newValue: string) => {
    dispatch(setValue2(newValue));
    calculatevalue();
  }, [currentCurrency2, firstValue, secondValue]);

  return (
    <div className="Indicator">
      <select
        title="select currency"
        name="currency"
        className="Indicator__currency"
        value={category === 'first' ? 'UAH' : currentCurrency2}
        disabled={category === 'first'}
        onChange={(event) => handlerChangeCurrency(event.target.value)}
      >
        {category === 'first' && (
          <option
            value="UAH"
            className="Indicator__currency-item"
          >
            UAH
          </option>
        )}
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
      </select>
      {category === 'first' && (
        <input
          type="text"
          className="Indicator__input"
          name="amount"
          placeholder="enter amount"
          value={firstValue}
          onChange={(event) => handlerChangeValue1(event.target.value)}
        />
      )}
      {category === 'second' && (
        <input
          type="text"
          className="Indicator__input"
          name="amount"
          placeholder="enter amount"
          value={secondValue}
          onChange={(event) => handlerChangeValue2(event.target.value)}
        />
      )}
    </div>
  );
}
