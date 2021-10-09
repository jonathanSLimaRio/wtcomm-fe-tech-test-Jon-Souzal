import React from 'react';
import { render } from '@testing-library/react';

import Footer from './footer';

describe('Footer', () => {
  it('should render successfully', () => {
    const { container } = render(
      <Footer
        links={[
          {
            href: 'domain.link.com',
            text: 'Some Text',
          },
        ]}
      />
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <footer
          class="makeStyles-footer-1"
        >
          <a
            aria-disabled="false"
            class="MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-button-2 MuiButton-containedSecondary"
            href="domain.link.com"
            tabindex="0"
          >
            <span
              class="MuiButton-label"
            >
              Some Text
            </span>
            <span
              class="MuiTouchRipple-root"
            />
          </a>
        </footer>
      </div>
    `);
  });
});
