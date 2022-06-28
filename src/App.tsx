import React, { useCallback, useState } from 'react';
import './App.scss';

export function App() {
  const [numberOne, setNumberOne] = useState('0');
  const [numberTwo, setNumberTwo] = useState('0');
  const [isSign, setIsSign] = useState(false);
  const [action, setAction] = useState('');
  const [board, setBoard] = useState('');

  const handlerDigit = useCallback((num: string) => {
    let firstElement = numberOne;
    const isOperator = isSign;

    if (isOperator) {
      setNumberOne(num);
      setIsSign(false);

      return;
    }

    if (firstElement === '0') {
      setNumberOne(num);
    } else {
      firstElement += num;
      setNumberOne(firstElement);
    }
  }, [numberOne]);

  const handlerReset = useCallback(() => {
    setNumberOne('0');
    setNumberTwo('0');
    setBoard('');
  }, [numberOne]);

  const handlerDelDigit = useCallback(() => {
    let firstElement = numberOne;

    if (firstElement.length === 1) {
      setNumberOne('0');
    } else {
      firstElement = firstElement.slice(0, -1);
      setNumberOne(firstElement);
    }
  }, [numberOne]);

  const handlerComa = useCallback(() => {
    let firstElement = numberOne;

    if (firstElement.length !== 0
      && !firstElement.includes(',')) {
      firstElement += '.';
      setNumberOne(firstElement);
    }
  }, [numberOne]);

  const handlerEquals = useCallback(() => {
    const firstElement = numberOne;
    const secondElement = numberTwo;
    const operator = action;
    let result = firstElement;

    if (operator === '/' && firstElement === '0') {
      setNumberOne('Error');
      return;
    }

    switch (operator) {
      case '+':
        result = String(parseFloat(secondElement) + parseFloat(firstElement));
        break;

      case '-':
        result = String(+secondElement - +firstElement);
        break;

      case '*':
        result = String(+secondElement * +firstElement);
        break;

      case '/':
        result = String(+secondElement / +firstElement);
        break;

      default:
        result = firstElement;
    }

    setNumberOne(result);
    setIsSign(true);
    setBoard('');
  }, [numberOne]);

  const handlerOperator = useCallback((sign: string) => {
    const firstElement = numberOne;
    const tablo = board;

    if (tablo.length > 0) {
      handlerEquals();
      console.log(tablo);
    }

    setNumberTwo(firstElement);
    setAction(sign);
    setBoard(`${firstElement} ${sign}`);
    setIsSign(true);
    setNumberOne('0');
  }, [numberOne]);

  const handlerChangeSign = useCallback(() => {
    const firstElement = numberOne;

    if (+firstElement === 0) {
      return;
    }

    if (+firstElement > 0) {
      setNumberOne(`-${firstElement}`);
    } else {
      setNumberOne(firstElement.slice(1));
    }
  }, [numberOne]);

  return (
    <div className="App__component">
      <h2>Hello</h2>
      <section className="calculator">
        <div className="calculator__container">
          <div className="calculator__scoreboard">
            <p className="calculator__result calculator__result--string ">
              {board}
            </p>
            <p className="calculator__result calculator__result--digit">
              {numberOne}
            </p>
          </div>
          <div className="calculator__buttons">
            <button
              type="button"
              className="calculator__button"
              onClick={handlerReset}
            >
              C
            </button>
            <button
              type="button"
              className="calculator__button"
              onClick={handlerDelDigit}
            >
              del
            </button>
            <button type="button" className="calculator__button">
              X
            </button>
            <button
              type="button"
              className="calculator__button"
              onClick={() => handlerOperator('+')}
            >
              +
            </button>
          </div>
          <div className="calculator__buttons">
            <button
              type="button"
              className="calculator__button"
              onClick={() => handlerDigit('7')}
            >
              7
            </button>
            <button
              type="button"
              className="calculator__button"
              onClick={() => handlerDigit('8')}
            >
              8
            </button>
            <button
              type="button"
              className="calculator__button"
              onClick={() => handlerDigit('9')}
            >
              9
            </button>
            <button
              type="button"
              className="calculator__button"
              onClick={() => handlerOperator('-')}
            >
              -
            </button>
          </div>

          <div className="calculator__buttons">
            <button
              type="button"
              className="calculator__button"
              onClick={() => handlerDigit('4')}
            >
              4
            </button>
            <button
              type="button"
              className="calculator__button"
              onClick={() => handlerDigit('5')}
            >
              5
            </button>
            <button
              type="button"
              className="calculator__button"
              onClick={() => handlerDigit('6')}
            >
              6
            </button>
            <button
              type="button"
              className="calculator__button"
              onClick={() => handlerOperator('*')}
            >
              *
            </button>
          </div>
          <div className="calculator__buttons">
            <button
              type="button"
              className="calculator__button"
              onClick={() => handlerDigit('1')}
            >
              1
            </button>
            <button
              type="button"
              className="calculator__button"
              onClick={() => handlerDigit('2')}
            >
              2
            </button>
            <button
              type="button"
              className="calculator__button"
              onClick={() => handlerDigit('3')}
            >
              3
            </button>
            <button
              type="button"
              className="calculator__button"
              onClick={() => handlerOperator('/')}
            >
              /
            </button>
          </div>
          <div className="calculator__buttons">
            <button
              type="button"
              className="calculator__button"
              onClick={handlerChangeSign}
            >
              +/-
            </button>
            <button
              type="button"
              className="calculator__button"
              onClick={() => handlerDigit('0')}
            >
              0
            </button>
            <button
              type="button"
              className="calculator__button"
              onClick={handlerComa}
            >
              ,
            </button>
            <button
              type="button"
              className="calculator__button"
              onClick={handlerEquals}
            >
              =
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
