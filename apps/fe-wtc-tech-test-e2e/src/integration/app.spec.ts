describe('fe-wtc-tech-test', () => {
  beforeEach(() => cy.visit('/'));

  it('should go to /instructions when click on button', () => {
    cy.get('a').contains('Instructions').click();
    cy.contains('Instructions').should('be.visible');
  });

  it('should exist pdf for the design', () => {
    cy.get('a').contains('Design');
    cy.request({
      url: 'http://localhost:4200/assets/design/fe_movies_tech_test.pdf',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('should go to /storybook when click on button', () => {
    cy.get('a').contains('Storybook').click();
    cy.contains('Filter Menu').should('be.visible');
  });
});
