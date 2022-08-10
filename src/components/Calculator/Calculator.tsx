import React, { useCallback, useState } from 'react';
import { Button } from '../../Button';
import './Calculator.scss';

export function Calculator() {
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

    if (operator === '/' && firstElement === '0') {
      setNumberOne('0');
      setNumberTwo('0');
      setBoard('Error');
      return;
    }

    switch (operator) {
      case '+':
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
    let result = firstElement;

    if (tablo.length > 0 && operator === '+') {
      result = (+secondElement + +firstElement).toString();
      setNumberTwo(result);
    } else {
      setNumberTwo(firstElement);
    }

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
    <section className="Calculator">
      <div className="Calculator__container">
        <div className="Calculator__scoreboard">
          <p className="Calculator__result Calculator__result--string ">
            {board}
          </p>
          <p className="Calculator__result Calculator__result--digit">
            {numberOne}
          </p>
        </div>
        <div className="Calculator__buttons">
          <Button
            type="button"
            operant
            onClick={handlerReset}
          >
            C
          </Button>
          <Button
            type="button"
            operant
            onClick={handlerDelDigit}
          >
            del
          </Button>
          <Button
            type="button"
            withoutHover
          />
          <Button
            type="button"
            operant
            onClick={() => handlerOperator('+')}
          >
            +
          </Button>
        </div>
        <div className="Calculator__buttons">
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
            operant
            onClick={() => handlerOperator('-')}
          >
            -
          </Button>
        </div>
        <div className="Calculator__buttons">
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
            operant
            onClick={() => handlerOperator('*')}
          >
            *
          </Button>
        </div>
        <div className="Calculator__buttons">
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
            operant
            onClick={() => handlerOperator('/')}
          >
            /
          </Button>
        </div>
        <div className="Calculator__buttons">
          <Button
            type="button"
            plusMinus
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
            equals
            onClick={handlerEquals}
          >
            =
          </Button>
        </div>
      </div>
    </section>
  );
}
