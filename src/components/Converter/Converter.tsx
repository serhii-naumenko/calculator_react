import React, { useCallback, useEffect, useState } from 'react';
import './Converter.scss';
import { BankRate, getCouresesCurrencies } from '../../api/api';

export function Converter() {
  const [typePurchasing, setTypePurchasing] = useState('buy');
  const [allRates, setAllRates] = useState([{
    ccy: 'UAH',
    buy: '1',
    sale: '1',
  }]);
  const [exchangeCurrency, setExchangeCarrency] = useState('USD');
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [rate, setRate] = useState('1');
  const [isActiveFirstField, setIsActiveFirstField] = useState(true);
  const arrayDependence = [
    firstValue,
    secondValue,
    exchangeCurrency,
    typePurchasing,
    rate,
    isActiveFirstField,
  ];

  useEffect(() => {
    async function response() {
      try {
        const ratesFromServer = await getCouresesCurrencies();
        const gottenRates = [
          ...ratesFromServer];

        setAllRates(gottenRates);
        const chosenRate = gottenRates[0].buy;
        if (chosenRate) {
          setRate(chosenRate);
        }
      } catch {
        throw Error;
      }
    }

    response();
  }, []);

  const handlerChangeValue1 = useCallback((newValue1: string, currentRate: string) => {
    const newValue2 = (+newValue1 / +currentRate).toString();
    setSecondValue(newValue2);
    setFirstValue(newValue1);
    setIsActiveFirstField(true);
  }, arrayDependence);

  const handlerChangeValue2 = useCallback((newValue2: string, currentRate: string) => {
    const newValue1 = (+newValue2 * +currentRate).toString();
    setSecondValue(newValue2);
    setFirstValue(newValue1);
    setIsActiveFirstField(false);
  }, arrayDependence);

  const handlerTypePurchasing = useCallback((chosenType: string) => {
    const currency = exchangeCurrency;
    const value1 = firstValue;
    const value2 = secondValue;
    const isActive = isActiveFirstField;
    setTypePurchasing(chosenType);
    const oneOfRates = allRates.find((chRate) => chRate.ccy === currency);
    if (oneOfRates) {
      const chosenCourse = (oneOfRates as BankRate)[chosenType];
      setRate(chosenCourse);
      if (isActive) {
        handlerChangeValue1(value1, chosenCourse);
      } else {
        handlerChangeValue2(value2, chosenCourse);
      }
    }
  }, arrayDependence);

  const handlerChangeCurrency = useCallback((exactCurrensy: string) => {
    const kindOfDeal = typePurchasing;
    const value1 = firstValue;
    const value2 = secondValue;
    const isActive = isActiveFirstField;
    setExchangeCarrency(exactCurrensy);
    const oneOfRates = allRates.find((chRate) => chRate.ccy === exactCurrensy);
    if (oneOfRates) {
      const chosenCourse = (oneOfRates as BankRate)[kindOfDeal];
      setRate(chosenCourse);
      if (isActive) {
        handlerChangeValue1(value1, chosenCourse);
      } else {
        handlerChangeValue2(value2, chosenCourse);
      }
    }
  }, arrayDependence);

  return (
    <div className="Converter">
      <div className="Converter__input-group">
        <p className="Converter__title-input">
          UAH
        </p>
        <input
          type="text"
          className="Converter__input"
          name="amount"
          placeholder="enter amount"
          value={(Math.round(+firstValue * 100) / 100).toString()}
          onChange={(event) => handlerChangeValue1(event.target.value, rate)}
        />
      </div>
      <select
        title="shoose an action"
        name="action"
        className="Converter__actions-currency"
        onChange={(event) => handlerTypePurchasing(event.target.value)}
      >
        <option
          value="buy"
          className="Converter__action-item"
        >
          Buy
        </option>
        <option
          value="sale"
          className="Converter__action-item"
        >
          Sale
        </option>
      </select>
      <select
        title="select currency"
        name="currency"
        className="Converter__actions-currency"
        value={exchangeCurrency}
        onChange={(event) => handlerChangeCurrency(event.target.value)}
      >
        <option
          value="USD"
          className="Converter__currency-item"
        >
          USD
        </option>
        <option
          value="EUR"
          className="Converter__currency-item"
        >
          EUR
        </option>
      </select>
      <div className="Converter__input-group">
        <p className="Converter__title-input">
          {exchangeCurrency}
        </p>
        <input
          type="text"
          className="Converter__input"
          name="amount"
          value={(Math.round(+secondValue * 100) / 100).toString()}
          onChange={(event) => handlerChangeValue2(event.target.value, rate)}
        />
      </div>
    </div>
  );
}
