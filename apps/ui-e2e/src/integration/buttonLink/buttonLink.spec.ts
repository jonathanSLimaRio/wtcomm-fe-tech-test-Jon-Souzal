describe('ui: ButtonLink component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttonlink--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to ui!');
  });
});
