import React, { useState } from 'react';
import { Button } from '../../index';

type CounterProps = {
  upperLimit?: number;
  lowerLimit?: number;
  initialValue?: number;
};

const checkInitialValues = ({
  upperLimit,
  lowerLimit,
  initialValue,
}: CounterProps): string | null => {
  if (upperLimit <= lowerLimit) {
    return `upperLimit should be >= lowerLimit`;
  } else if (initialValue > upperLimit) {
    return `initialValue should be <= upperLimit`;
  } else if (initialValue < lowerLimit) {
    return `initialValue should be > lowerLimit`;
  }

  return null;
};

export const Counter = ({
  upperLimit = 5,
  lowerLimit = 0,
  initialValue = 0,
}: CounterProps) => {
  const [counter, setCounter] = useState(initialValue);
  const [disableBtnDecr, setDisableBtnDecr] = useState<boolean>(
    initialValue === lowerLimit
  );
  const [disableBtnIncr, setDisableBtnIncr] = useState<boolean>(
    initialValue >= upperLimit
  );
  const error = checkInitialValues({ upperLimit, lowerLimit, initialValue });

  const handleDecrement = (): void => {
    const newState = counter === lowerLimit ? lowerLimit : counter - 1;
    if (newState === lowerLimit) {
      setDisableBtnDecr(!disableBtnDecr);
    } else if (newState < upperLimit && disableBtnIncr) {
      setDisableBtnIncr(false);
    }
    setCounter(newState);
  };

  const handleIncrement = (): void => {
    const newState = counter + 1;
    if (newState > lowerLimit && disableBtnDecr) {
      setDisableBtnDecr(false);
    } else if (newState === upperLimit) {
      setDisableBtnIncr(true);
    }
    setCounter(newState);
  };

  return error ? (
    <>
      <h2>Oh no! There is an error!</h2>
      <p>{error}</p>
    </>
  ) : (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleDecrement}
        disabled={disableBtnDecr}
      >
        Decrement
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleIncrement}
        disabled={disableBtnIncr}
      >
        Increment
      </Button>
      <p>Total: {counter}</p>
    </>
  );
};

export default Counter;
