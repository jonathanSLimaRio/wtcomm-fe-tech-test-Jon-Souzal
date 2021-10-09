import React from 'react';
import { render } from '@testing-library/react';

import Paper from './paper';

describe('Paper', () => {
  it('should render successfully', () => {
    const { container } = render(<Paper>Paper content</Paper>);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="MuiPaper-root MuiPaper-elevation1 MuiPaper-rounded"
        >
          Paper content
        </div>
      </div>
    `);
  });
});
