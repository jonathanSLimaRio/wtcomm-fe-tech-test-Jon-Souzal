const getToRequestUrl = (routeIdentifier) => {
  cy.contains(routeIdentifier).click();
  cy.contains('Try it out').click();
  cy.contains('Execute').click();
  cy.contains('Request URL');
};
const testGetEndpoint = ({ routeIdentifier, contentNotEqualTo }) => {
  getToRequestUrl(routeIdentifier);
  cy.get('.request-url').within(() => {
    cy.get('pre')
      .invoke('text')
      .then((text) => {
        cy.request(text).then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.not.equal(contentNotEqualTo);
        });
      });
  });
  cy.contains(routeIdentifier).click();
};

const testPutEndpoint = ({ routeIdentifier, contentEqualTo }) => {
  getToRequestUrl(routeIdentifier);
  cy.get('.responses-inner').within(() => {
    let bodyParam = {};
    cy.get('textarea')
      .invoke('text')
      .then((text) => {
        const arr = text.split(' ');
        const params = arr[arr.length - 1];
        bodyParam = params
          .substring(1, params.length - 1) //remove first and last ""
          .split('&')
          .reduce((prev, curr) => {
            // return the bodyparams as obj
            const value = curr.split('=');
            return {
              ...prev,
              [value[0]]: value[1],
            };
          }, {});
      });
    cy.get('.request-url').within(() => {
      cy.get('pre')
        .invoke('text')
        .then((url) => {
          cy.request({
            method: 'PUT',
            url,
            body: bodyParam,
          }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.equal(contentEqualTo);
          });
        });
    });
  });
  cy.contains(routeIdentifier).click();
};

describe('fe-wtc-tech-test', () => {
  beforeEach(() => cy.visit('/'));

  it('should go to /swagger when click on button', () => {
    cy.get('a').contains('Swagger').click();
    cy.contains('Wunderman Thompson Commerce movies API').should('be.visible');
    testGetEndpoint({
      routeIdentifier: 'Get list of all actors',
      contentNotEqualTo: '{}',
    });

    testGetEndpoint({
      routeIdentifier: 'Get list of all directors',
      contentNotEqualTo: '{}',
    });
    testGetEndpoint({
      routeIdentifier: 'Get list of all facets',
      contentNotEqualTo: '{}',
    });

    testGetEndpoint({
      routeIdentifier: `Get specific movie by imdbID`,
      contentNotEqualTo: '{}',
    });
    testGetEndpoint({
      routeIdentifier: `Get list of all movies`,
      contentNotEqualTo: '[]',
    });
    testGetEndpoint({
      routeIdentifier: `Get specific movie by name`,
      contentNotEqualTo: '{}',
    });

    testPutEndpoint({
      routeIdentifier: `Update movie's state for watched and saved`,
      contentEqualTo: 'OK',
    });
  });
});
