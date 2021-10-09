import React from 'react';
import { DetailsBox } from '@mono-nx-test-with-nextjs/ui';

export const Tasks = ({
  children,
  summary,
  extraTasks = null,
  additionalInfo = null,
}) => (
  <DetailsBox summaryDescription={summary}>
    {children}
    {extraTasks && extraTasks.map((task) => task)}
    <Notes additionalInfo={additionalInfo} />
  </DetailsBox>
);

export const Notes = ({ additionalInfo = null }) => {
  return (
    <>
      <h5>Notes & useful links:</h5>
      <ul>
        <li>
          <a
            href="/assets/design/fe_movies_tech_test.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Design
          </a>
        </li>
        <li>
          <a
            href="http://localhost:3333/swagger-doc"
            target="_blank"
            rel="noopener noreferrer"
          >
            API swagger doc
          </a>
        </li>
        {additionalInfo &&
          additionalInfo.map((info) => <li key={info}>{info}</li>)}
      </ul>
    </>
  );
};

export const FetchAllMovies = ({ extraTasks = [] }) => {
  return (
    <Tasks summary={`Fetch all movies`}>
      <p>
        As a user, I want to see the list of all movies, so I can see what is
        available. At the top of the page, I want to see the total number of
        movies fetched.
      </p>
      <p>
        As a user, I want to be able to see a movie represented as a card which
        has the movie's poster in the center and its rating at the bottom.
      </p>
      <p>
        The rating is calculated as the average of the 3 values present in the
        "Ratings" property (from the API).
      </p>
      <pre>{'3 <= rating <= 3.49    -----> 3 stars'}</pre>
      <pre>{'3.50 <= rating <= 3.99 -----> 3.5 stars'}</pre>
      <h5>Tasks</h5>
      <ol>
        <li>
          <p>Fetch the list of movies from the API</p>
        </li>
        <li>
          <p>Create the card component</p>
        </li>
        {extraTasks &&
          extraTasks.map((task, index) => <li key={index}>{task}</li>)}
      </ol>
    </Tasks>
  );
};

export const CardsState = (
  <div key={'cardsState'}>
    <p>
      At the top of the card, I want 2 icons that will allow me to save a movie
      in my watch list and keep track of which movie I have already seen.
      Additionally, upon clicking, the background's color of the movie's card
      will change, so I can use colors to easily identify their states.
    </p>
    <b>
      <p>There are 4 different states:</p>
    </b>
    <ol>
      <li>
        <ul>
          <li>Watched: false</li>
          <li>Saved: false</li>
          <li>Background color: #FFF</li>
        </ul>
      </li>
      <li>
        <ul>
          <li>Watched: false</li>
          <li>Saved:true</li>
          <li>Background color: #ED6606</li>
        </ul>
      </li>
      <li>
        <ul>
          <li>Watched: true</li>
          <li>Saved: false</li>
          <li>Background color: #EEC907</li>
        </ul>
      </li>
      <li>
        <ul>
          <li>Watched: true</li>
          <li>Saved: true</li>
          <li>Background color: #049452</li>
        </ul>
      </li>
    </ol>
  </div>
);
