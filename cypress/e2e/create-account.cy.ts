describe('Create-account', () => {
  it('should not create account if the form is invalid - missing email', () => {
    cy.visit('/create-account');
    cy.url().should('include', 'create-account');
    cy.get('#name-input').type('E2Etest');
    cy.get('#password-input').type('E2Etest');
    cy.get('.create_button').click();

    cy.get('.swal2-container').should('be.visible');
    cy.get('.swal2-title').should('have.text', 'Error');
    cy.get('.swal2-html-container').should('have.text', 'All fields are required.');

    cy.url().should('not.include', 'login');
  });

  it('should not create account if the form is invalid - missing password', () => {
    cy.visit('/create-account');
    cy.url().should('include', 'create-account');
    cy.get('#name-input').type('E2Etest');
    cy.get('#email-input').type('E2Etest111@mail.com');
    cy.get('.create_button').click();

    cy.get('.swal2-container').should('be.visible');
    cy.get('.swal2-title').should('have.text', 'Error');
    cy.get('.swal2-html-container').should('have.text', 'All fields are required.');

    cy.url().should('not.include', 'login');
  });

  it('should not create account if the form is invalid - invalid email', () => {
    cy.visit('/create-account');
    cy.url().should('include', 'create-account');
    cy.get('#name-input').type('E2Etest');
    cy.get('#email-input').type('E2Etest');
    cy.get('#password-input').type('E2Etest');
    cy.get('.create_button').click();

    cy.get('.swal2-container').should('be.visible');
    cy.get('.swal2-title').should('have.text', 'Error');
    cy.get('.swal2-html-container').should('have.text', 'Please enter a valid email address.');

    cy.url().should('not.include', 'login');
  });

  it('should not create account if the email is already in use', () => {
    cy.visit('/create-account');
    cy.url().should('include', 'create-account');
    cy.get('#name-input').type('E2Etest');
    cy.get('#email-input').type('plant@mail.com');
    cy.get('#password-input').type('E2Etest');
    cy.get('.create_button').click();

    cy.get('.swal2-container').should('be.visible');
    cy.get('.swal2-title').should('have.text', 'Error');
    cy.get('.swal2-html-container').should('have.text', 'Email address already exists.');

    cy.url().should('not.include', 'login');
  });

  it('should not create account if the form is invalid - missing name', () => {
    cy.visit('/create-account');
    cy.url().should('include', 'create-account');
    cy.get('#email-input').type('E2Etest111@mail.com');
    cy.get('#password-input').type('E2Etest');
    cy.get('.create_button').click();

    cy.get('.swal2-container').should('be.visible');
    cy.get('.swal2-title').should('have.text', 'Error');
    cy.get('.swal2-html-container').should('have.text', 'All fields are required.');

    cy.url().should('not.include', 'login');
  });

  it('should not create account if the form is invalid - missing name and email', () => {
    cy.visit('/create-account');
    cy.url().should('include', 'create-account');
    cy.get('#password-input').type('E2Etest');
    cy.get('.create_button').click();
    
    cy.get('.swal2-container').should('be.visible');
    cy.get('.swal2-title').should('have.text', 'Error');
    cy.get('.swal2-html-container').should('have.text', 'All fields are required.');

    cy.url().should('not.include', 'login');
  });

  it('should not create account if the form is invalid - missing name and password', () => {
    cy.visit('/create-account');
    cy.url().should('include', 'create-account');
    cy.get('#email-input').type('E2Etest111@mail.com');
    cy.get('.create_button').click();

    cy.get('.swal2-container').should('be.visible');
    cy.get('.swal2-title').should('have.text', 'Error');
    cy.get('.swal2-html-container').should('have.text', 'All fields are required.');

    cy.url().should('not.include', 'login');
  });

  it('should not create account if the form is invalid - missing email and password', () => {
    cy.visit('/create-account');
    cy.url().should('include', 'create-account');
    cy.get('#name-input').type('E2Etest');
    cy.get('.create_button').click();
    
    cy.get('.swal2-container').should('be.visible');
    cy.get('.swal2-title').should('have.text', 'Error');
    cy.get('.swal2-html-container').should('have.text', 'All fields are required.');

    cy.url().should('not.include', 'login');
  });

  it('should create account if the form is valid', () => {
    cy.visit('/create-account');
    cy.url().should('include', 'create-account');
    cy.get('#name-input').type('E2Etest');
    cy.get('#email-input').type('E2Etest4@mail.com');
    cy.get('#password-input').type('E2Etest');
    cy.get('.create_button').click();
    cy.get('.swal2-confirm').click();
    cy.url().should('include', 'login');
  });

  it('should go to login page if login button is pressed', () => {
    cy.visit('/create-account');
    cy.url().should('include', 'create-account');
    cy.get('.login_button').click();
    cy.url().should('include', 'login');
  });
});