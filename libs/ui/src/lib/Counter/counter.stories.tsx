import React from 'react';
import { number } from '@storybook/addon-knobs';
import { Counter } from './counter';

export default {
  component: Counter,
  title: 'Counter to test',
};

export const ThisIsHowIWork = () => {
  return (
    <>
      <h3>
        You can change the values of the counter's props in the knobs panel
        below
      </h3>
      <Counter
        upperLimit={number('Upper Limit', 5)}
        lowerLimit={number('Lower Limit', 0)}
        initialValue={number('Initial Value', 0)}
      />
    </>
  );
};
