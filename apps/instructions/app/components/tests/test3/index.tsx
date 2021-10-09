import React from 'react';
import { FetchAllMovies, Tasks } from '../common';

export const test3 = (
  <ol>
    <li>
      <FetchAllMovies />
    </li>
    <li>
      <Tasks summary={`Cards Carousel`}>
        <p>As a user I want to see all the cards in a carousel.</p>
        <p>I want the carousel to be responsive.</p>
        <h5>Tasks</h5>
        <ol>
          <li>Build the carousel</li>
          <li>Make the view responsive</li>
        </ol>
      </Tasks>
    </li>
  </ol>
);
