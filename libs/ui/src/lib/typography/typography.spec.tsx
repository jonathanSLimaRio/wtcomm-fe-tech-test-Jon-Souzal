import React from 'react';
import { render } from '@testing-library/react';

import Typography from './typography';

describe('Typography', () => {
  it('should render successfully', () => {
    const { container } = render(<Typography>Typography content</Typography>);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <p
          class="MuiTypography-root MuiTypography-body1"
        >
          Typography content
        </p>
      </div>
    `);
  });
});
