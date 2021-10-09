describe('ui: DetailsBox component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=detailsbox--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to ui!');
  });
});
