import React from 'react';
import { FetchAllMovies, CardsState } from '../common';

export const test1 = (
  <ol>
    <li>
      <FetchAllMovies
        extraTasks={[
          CardsState,
          <p>Make the view responsive (WITHOUT FILTERS)</p>,
        ]}
      />
    </li>
  </ol>
);
