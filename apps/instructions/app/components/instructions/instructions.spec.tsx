import React from 'react';
import { render } from '@testing-library/react';
import Instructions from '.';

describe('pages/instructions', () => {
  it('should render the instructions', () => {
    const { container } = render(<Instructions />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <main>
          <h1>
            Instructions
          </h1>
          <p>
            The idea of this test is to give you something which is as close as possible to a real situation where you have to implement some user stories in a codebase. We believe this is the best way to evaluate a candidate because this is what you will do if you get the job. Hopefully, you will find this test challenging and fun. We do appreciate any feedback, good or bad you might have. Do not hesitate to let us know what you think! Help us improve!
          </p>
          <p>
            Let's begin...
          </p>
          <p>
            This codebase is a mono-repo. At the moment you will find:
          </p>
          <section>
            <ul>
              <li>
                A FE application in Next.js (apps/fe-wtc-tech-test)
              </li>
              <li>
                A React library of components (libs/ui)
              </li>
              <li>
                An Express API (apps/api)
              </li>
              <li>
                E2E tests (apps/fe-wtc-tech-test-e2e)
              </li>
            </ul>
            <ul>
              <li>
                <h4>
                  <b>
                    In order to speed up development
                  </b>
                </h4>
                <p>
                  If you'd like, you can use, change or extend components already present in the ui library. Those we have included, are just a wrapper around the Material UI one, nothing more. You can import them in this way:
                </p>
                <p>
                  <code
                    class="makeStyles-code-1"
                  >
                    import { Button, Progress } from '@mono-nx-test-with-nextjs/ui';
                  </code>
                </p>
                <p>
                  Same thing for icons. They can be imported directly as a normal component from the library as:
                </p>
                <p>
                  <code
                    class="makeStyles-code-1"
                  >
                    import {VisibilityIcon} from '@mono-nx-test-with-nextjs/ui';
                  </code>
                </p>
                <p>
                  This is the list of the original Material UI components we wrapped:
                </p>
                <ul>
                  <li>
                    <a
                      href="https://material-ui.com/components/Grid/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Grid
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://material-ui.com/components/Progress/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Progress
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://material-ui.com/components/Buttons/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Buttons
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://material-ui.com/components/material-icons/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      material-icons
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://material-ui.com/components/Typography/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Typography
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://material-ui.com/components/Paper/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Paper
                    </a>
                  </li>
                </ul>
                <p>
                  You can also use Material UI Utils.
                </p>
                <b>
                  <p>
                    <b>
                      Nothing else is allowed from Material UI or extra UI framework (i.e. Bootstrap). We want you to create new components.
                    </b>
                  </p>
                </b>
              </li>
            </ul>
          </section>
          <p>
            The FE application is already connected to the API (swagger below), so you don't need to worry about that. But there is also a shared library of components which you might want to use. Imagine this a real situation, so when you create a new component, you need to think where to put it. Does it belong to a share component library or in the application?
          </p>
          <p>
            Remember, the API is not persistent, so every time you make a change with PUT etc. it will be saved until you restart.
          </p>
          <p>
            <b>
              Somebody should have told you which test to do, if you are not sure, please reach out to your recruiter and ask.
            </b>
          </p>
          <p>
            We are expecting people at any level to be able to delivery any of the below tests. There is no time limit, so you can relax and get it done when you can, it will take you only a few hours. The actual implementation will help us to assess your level more accurately. If we do not like your implementation or how you code and you fail the test, this doesn't make you a bad coder, it is just our own opinion, don't take it personally, we can also make mistakes.
          </p>
          <h2>
            TEST
          </h2>
          <div>
            <h3>
              Test 
              1 - Movies cards
              : 
              <b>
                Movies cards
              </b>
            </h3>
            <h4>
              User Stories
            </h4>
            <ol>
              <li>
                <details
                  class="makeStyles-details-2"
                >
                  <summary>
                    Fetch all movies
                  </summary>
                  <div>
                    <p>
                      As a user, I want to see the list of all movies, so I can see what is available. At the top of the page, I want to see the total number of movies fetched.
                    </p>
                    <p>
                      As a user, I want to be able to see a movie represented as a card which has the movie's poster in the center and its rating at the bottom.
                    </p>
                    <p>
                      The rating is calculated as the average of the 3 values present in the "Ratings" property (from the API).
                    </p>
                    <pre>
                      3 &lt;= rating &lt;= 3.49    -----&gt; 3 stars
                    </pre>
                    <pre>
                      3.50 &lt;= rating &lt;= 3.99 -----&gt; 3.5 stars
                    </pre>
                    <h5>
                      Tasks
                    </h5>
                    <ol>
                      <li>
                        <p>
                          Fetch the list of movies from the API
                        </p>
                      </li>
                      <li>
                        <p>
                          Create the card component
                        </p>
                      </li>
                      <li>
                        <div>
                          <p>
                            At the top of the card, I want 2 icons that will allow me to save a movie in my watch list and keep track of which movie I have already seen. Additionally, upon clicking, the background's color of the movie's card will change, so I can use colors to easily identify their states.
                          </p>
                          <b>
                            <p>
                              There are 4 different states:
                            </p>
                          </b>
                          <ol>
                            <li>
                              <ul>
                                <li>
                                  Watched: false
                                </li>
                                <li>
                                  Saved: false
                                </li>
                                <li>
                                  Background color: #FFF
                                </li>
                              </ul>
                            </li>
                            <li>
                              <ul>
                                <li>
                                  Watched: false
                                </li>
                                <li>
                                  Saved:true
                                </li>
                                <li>
                                  Background color: #ED6606
                                </li>
                              </ul>
                            </li>
                            <li>
                              <ul>
                                <li>
                                  Watched: true
                                </li>
                                <li>
                                  Saved: false
                                </li>
                                <li>
                                  Background color: #EEC907
                                </li>
                              </ul>
                            </li>
                            <li>
                              <ul>
                                <li>
                                  Watched: true
                                </li>
                                <li>
                                  Saved: true
                                </li>
                                <li>
                                  Background color: #049452
                                </li>
                              </ul>
                            </li>
                          </ol>
                        </div>
                      </li>
                      <li>
                        <p>
                          Make the view responsive (WITHOUT FILTERS)
                        </p>
                      </li>
                    </ol>
                    <h5>
                      Notes & useful links:
                    </h5>
                    <ul>
                      <li>
                        <a
                          href="/assets/design/fe_movies_tech_test.pdf"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Design
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://localhost:3333/swagger-doc"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          API swagger doc
                        </a>
                      </li>
                    </ul>
                  </div>
                </details>
              </li>
            </ol>
          </div>
          <hr />
          <h3>
            The git bit
          </h3>
          <p>
            When you commit your code, you need to follow this patter:
          </p>
          <p>
            user story userStoryNumber.taskNumber. For instance:
          </p>
          <p>
            user story 1.1 
            =&gt;
             if you are working on user story 1 task 1
          </p>
          <p>
            user story 1.2 
            =&gt;
             if you are working on user story 1 task 2
          </p>
          <p>
            When you think you are ready for us to review your work, just push your code up and send an email to your recruiter. You can push even if you are not ready yet, we won't review it until you say it is.
          </p>
          <hr />
          <details
            class="makeStyles-details-2"
          >
            <summary>
              What we check when grading your solution
            </summary>
            <div>
              <ul>
                <li>
                  If your solution meets accessibility standards (at least level A)
                </li>
                <li>
                  If your solution meets security standards
                </li>
                <li>
                  If your solution produces any errors or messages in the console
                </li>
                <li>
                  How your solution handles application errors
                </li>
                <li>
                  How much your solution follows our instructions
                </li>
                <li>
                  If you use any third-parties and why
                </li>
                <li>
                  How you structure your code
                </li>
                <li>
                  How clean your code is
                </li>
                <li>
                  Your attention to details
                </li>
                <li>
                  How close to the design your solution is
                </li>
                <li>
                  How you write typescript
                </li>
                <li>
                  If your solution runs on our machine after following your instructions (if you change anything and diverge from the default behavior)
                </li>
              </ul>
            </div>
          </details>
          <details
            class="makeStyles-details-2"
          >
            <summary>
              What we DON'T check when grading your solution:
            </summary>
            <div>
              <ul>
                <li>
                  What you choose as CSS methods (BEM, SMACSS, OOCSS, etc.)
                </li>
                <li>
                  What you choose as CSS "tools" (less, sass, CSS-in-JS)
                </li>
                <li>
                  If you add extra functionalities but you don't do 100% of what requested. If you want to impress us, follow our instructions and do things properly (add all the required tests!), that is enough.
                </li>
                <li>
                  The time you spend on it
                </li>
              </ul>
            </div>
          </details>
          <hr />
          <h3>
            Requirements
          </h3>
          <ul>
            <li>
              Your solution should be responsive
            </li>
            <li>
              Your solution should work on all the latest 2 versions of modern browsers:
              <ul>
                <li>
                  Chrome
                </li>
                <li>
                  Safari
                </li>
                <li>
                  Firefox
                </li>
                <li>
                  Edge
                </li>
              </ul>
              <p>
                <b>
                  What about Explorer 11? If your solution supports it, great! Let us know and we will give you extra points, but it is not required.
                </b>
              </p>
            </li>
            <li>
              Your solution should handle application errors (No data from API, no images, etc.)
            </li>
            <li>
              You can add other things if you require to (lodash modules, ramda, Redux etc.). If you do, we want to know why.
            </li>
            <li>
              Your solution should include MEANINGFUL tests which test some or all the application's logic. Snapshots tests are fine for presentational components, but they might not be enough in other scenarios. We want to see how you test application logic, we give for granted that you know how to write snapshots tests. We want to know if you understand the difference between unit, integration and end-2-end tests and how you approach it.
            </li>
            <li>
              if you diverge from the default behavior of this repo, you should add at the top or the readme file the new instructions. Please be clear.
            </li>
          </ul>
          <h3>
            Notes:
          </h3>
          <ul>
            <li>
              <p>
                Where you are now is where the instructions 
                <span
                  style="font-size: 30px;"
                >
                   ⚙
                </span>
                 
                page is:
                 
                <a
                  href="http://localhost:5200"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  http://localhost:5200
                </a>
                . 
                You can always come back here anytime, just click on the button in the footer. 
                <span
                  style="font-size: 30px;"
                >
                  👇
                </span>
              </p>
              <p>
                The FE application home is exposed at:
                 
                <a
                  href="http://localhost:4200/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  http://localhost:4200/
                </a>
              </p>
              <p>
                The FE application home is where you need to put your code!
              </p>
            </li>
            <li>
              The API is exposed at http://localhost:3333.
              <p>
                API's endpoint example (movies):
                 
                <a
                  href="http://localhost:3333/api/movies"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  http://localhost:3333/api/movies
                </a>
              </p>
              <p>
                <a
                  href="http://localhost:3333/swagger-doc"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  API swagger doc
                </a>
              </p>
              <p>
                <b>
                  Remember, you can actually hit the endpoints from the swagger doc to see the data. Click on "Try it out" and then execute. You can also play around with params.
                </b>
              </p>
            </li>
            <li>
              <p>
                <a
                  href="http://localhost:5200/assets/design/fe_movies_tech_test.pdf"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Design
                </a>
              </p>
            </li>
            <li>
              To run the unit tests use this command:
              <p>
                yarn test:react
              </p>
            </li>
          </ul>
          <p>
            That's it!! Now you can start. We hope you will enjoy this challenge and good luck!
          </p>
          <p>
            <b>
              01001000 01100001 01110000 01110000 01111001 00100000 01100011 01101111 01100100 01101001 01101110 01100111 00100001
            </b>
          </p>
        </main>
      </div>
    `);
  });
});
