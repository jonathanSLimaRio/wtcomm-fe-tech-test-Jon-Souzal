import React from 'react';
import { render } from '@testing-library/react';

import Counter from './counter';

describe('Counter', () => {
  it('should render correctly', () => {
    const { baseElement } = render(<Counter />);
    expect(baseElement).toBeTruthy();
  });
});
