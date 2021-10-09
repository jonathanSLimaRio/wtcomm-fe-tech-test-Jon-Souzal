import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Toggle from './toggle';

const id = 'myId';
const contentFixed = 'Any content should do it';
const contentWithState = 'Content with state';

describe('Toggle', () => {
  it('should render successfully its children', () => {
    const { getByText } = render(<Toggle>Any content should do it</Toggle>);
    expect(getByText(contentFixed)).toBeInTheDocument();
  });

  it('should call onChange when its content is toggled', () => {
    const mockOnChange = jest.fn();
    const { getByText } = render(
      <Toggle id={id} onChange={mockOnChange}>
        Any content should do it
      </Toggle>
    );
    const element = getByText(contentFixed);

    fireEvent.click(element);
    expect(mockOnChange).toHaveBeenCalledWith(true, id);

    fireEvent.click(element);
    expect(mockOnChange).toHaveBeenCalledWith(false, id);
  });

  it('should reset state', () => {
    const { getByText, rerender } = render(
      <Toggle id={id}>{(state) => `${contentWithState} ${state}`}</Toggle>
    );
    const element = getByText(`${contentWithState} false`);

    fireEvent.click(element);
    expect(getByText(`${contentWithState} true`)).toBeInTheDocument();

    rerender(
      <Toggle id={id} reset={true}>
        {(state) => `${contentWithState} ${state}`}
      </Toggle>
    );

    expect(getByText(`${contentWithState} false`)).toBeInTheDocument();
  });
});
