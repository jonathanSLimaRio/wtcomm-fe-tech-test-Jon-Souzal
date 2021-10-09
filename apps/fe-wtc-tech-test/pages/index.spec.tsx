import React from 'react';
import { render } from '@testing-library/react';
import Home from '.';

describe('/', () => {
  it('should render the homepage', () => {
    const { container } = render(<Home />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <main>
          <h1>
            Edit apps/fe-wtc-tech-test/pages/index.tsx and save to reload.
          </h1>
          <h2>
            Click on the instructions button to understand what to do
          </h2>
        </main>
      </div>
    `);
  });
});
