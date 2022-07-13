import React, { useCallback, useState } from 'react';
import { Button } from './Button';
import './App.scss';

export function App() {
  const [numberOne, setNumberOne] = useState('0');
  const [numberTwo, setNumberTwo] = useState('0');
  const [isSign, setIsSign] = useState(false);
  const [action, setAction] = useState('');
  const [board, setBoard] = useState('');
  // const [result, setResult] = useState('');

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

    if (operator === '/' && firstElement === '0') {
      setNumberOne('0');
      setNumberTwo('0');
      setBoard('Error');
      return;
    }

    switch (operator) {
      case '+':
        console.log(firstElement);
        console.log(secondElement);

        setNumberOne(String(+secondElement + +firstElement));
        break;

      case '-':
        setNumberOne(String(+secondElement - +firstElement));
        break;

      case '*':
        setNumberOne(String(+secondElement * +firstElement));
        break;

      case '/':
        setNumberOne(String(+secondElement / +firstElement));
        break;

      default:
        setNumberOne(firstElement);
    }

    setIsSign(true);
    setBoard('');
  }, [numberOne]);

  const handlerOperator = useCallback((sign: string) => {
    const tablo = board;
    const firstElement = numberOne;
    const secondElement = numberTwo;
    const operator = action;
    // const isOperator = isSign;
    let result = firstElement;
    console.log(`tab=${tablo}, first=${firstElement}, sec=${secondElement}`);
    console.log(`op=${operator}, sign=${sign}`);

    if (tablo.length > 0 && operator === '+') {
      result = String(+secondElement + +firstElement);
      setNumberTwo(result);
    } else {
      setNumberTwo(firstElement);
    }

    setAction(sign);
    setBoard(`${firstElement} ${sign}`);
    setIsSign(true);
    // setNumberTwo(firstElement);
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
            <Button
              type="button"
              onClick={handlerReset}
            >
              C
            </Button>
            <Button
              type="button"
              onClick={handlerDelDigit}
            >
              del
            </Button>
            <Button
              type="button"
            >
              X
            </Button>
            <Button
              type="button"
              onClick={() => handlerOperator('+')}
            >
              +
            </Button>
          </div>
          <div className="calculator__buttons">
            <Button
              type="button"
              onClick={() => handlerDigit('7')}
            >
              7
            </Button>
            <Button
              type="button"
              onClick={() => handlerDigit('8')}
            >
              8
            </Button>
            <Button
              type="button"
              onClick={() => handlerDigit('9')}
            >
              9
            </Button>
            <Button
              type="button"
              onClick={() => handlerOperator('-')}
            >
              -
            </Button>
          </div>
          <div className="calculator__buttons">
            <Button
              type="button"
              onClick={() => handlerDigit('4')}
            >
              4
            </Button>
            <Button
              type="button"
              onClick={() => handlerDigit('5')}
            >
              5
            </Button>
            <Button
              onClick={() => handlerDigit('6')}
            >
              6
            </Button>
            <Button
              type="button"
              onClick={() => handlerOperator('*')}
            >
              *
            </Button>
          </div>
          <div className="calculator__buttons">
            <Button
              type="button"
              onClick={() => handlerDigit('1')}
            >
              1
            </Button>
            <Button
              type="button"
              onClick={() => handlerDigit('2')}
            >
              2
            </Button>
            <Button
              type="button"
              onClick={() => handlerDigit('3')}
            >
              3
            </Button>
            <Button
              type="button"
              onClick={() => handlerOperator('/')}
            >
              /
            </Button>
          </div>
          <div className="calculator__buttons">
            <Button
              type="button"
              onClick={handlerChangeSign}
            >
              +/-
            </Button>
            <Button
              type="button"
              onClick={() => handlerDigit('0')}
            >
              0
            </Button>
            <Button
              type="button"
              onClick={handlerComa}
            >
              ,
            </Button>
            <Button
              type="button"
              onClick={handlerEquals}
            >
              =
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
