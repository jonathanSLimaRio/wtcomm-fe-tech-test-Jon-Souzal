import React from 'react';
import { FetchAllMovies, CardsState, Tasks } from '../common';

export const test2 = (
  <>
    <ol>
      <li>
        <FetchAllMovies extraTasks={[CardsState]} />
      </li>
      <li>
        <Tasks summary={`Add Filters (desktop view)`}>
          <p>
            As a user, I want to filter the list of all movies available, so I
            can better decide based on my preference. I want a menu on the left.
            I want to use these filters:
          </p>
          <p>
            Some options can be too long, so as a user, I want these lists to be
            shorten. I want to be able to click on a "See more" button to see
            the rest.
          </p>
          <ul>
            <li>Type</li>
            <li>Year of release</li>
            <li>Metascore range</li>
            <li>Genre</li>
            <li>Watched already</li>
            <li>Saved in watched list</li>
            <li>Name of actor</li>
            <li>Name of director</li>
          </ul>
          <h5>Tasks</h5>
          <ol>
            <li>
              Build the DESKTOP view (you can re-use FilterMenu if you wish)
            </li>
            <li>Filter cards using the filters in the menu</li>
            <li>
              If you decide to <b>NOT</b> build the mobile view (optional user
              story <b>Mobile view</b>), the layout of the cards and filters
              should still look nice on mobile. It is up to you how you want it
              to look like.
            </li>
          </ol>
        </Tasks>
      </li>
    </ol>
    <h5>Optional (if you want to impress us):</h5>
    <ol>
      <li>
        <Tasks summary={`Mobile view`}>
          <p>
            As a user I want to browse the application on a mobile device.
            Filters should be hidden by default and they should appear only when
            a button is clicked.
          </p>
          <p>Filters should cover the all screen when opened.</p>
          <p>
            The list of filters is too long, so I want the filters to be grouped
            in categories. I want every category to be a clickable button that
            when clicked, shows the list of all the options available
          </p>
        </Tasks>
      </li>
    </ol>
  </>
);
