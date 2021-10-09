import { getGreeting } from '../support/app.po';

describe('fe-wtc-tech-test-angularv2', () => {
  beforeEach(() => cy.visit('/'));

  it('should display Instructions', () => {
    cy.get('h2').contains('Add your code here');
  });

  it('should have all buttons', () => {
    cy.get('a').contains('Instructions');
    cy.get('a').contains('Swagger');
    cy.get('a').contains('Design');
  });
});
