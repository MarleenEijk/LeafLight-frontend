describe('Login', () => {
  it('should not login if the form is invalid', () => {
    cy.visit('/');
    cy.url().should('include', 'login');
    cy.get('#email-input').type('user1@mail.com');
    cy.get('.login_button').click();
    cy.url().should('not.include', 'plantlibrary');
  });

  it('should not login if the form is invalid', () => {
    cy.visit('/');
    cy.url().should('include', 'login');
    cy.get('#email-input').type('user1@mail.com');
    cy.get('#password-input').type('password1');
    cy.get('.login_button').click();
    cy.url().should('include', 'plants');
  });
});
