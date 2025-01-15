describe('plant-library', () => {
  it('should show plants', () => {
    cy.visit('/plants');
    cy.url().should('include', 'plants');
    cy.get('.plant-library .title').should('contain.text', 'Plant Library');
    cy.get('.all-boxes .plant-box').should('have.length.greaterThan', 0);
    cy.get('.all-boxes .plant-box').first().within(() => {
      cy.get('.plant-image').should('be.visible');
      cy.get('.plant-name').should('not.be.empty');
      cy.get('.favourite').should('be.visible');
    });
  });

  it('should show plant details', () => {
    cy.visit('/plants');
    cy.url().should('include', 'plants');
    cy.get('.all-boxes .plant-box').first().click();
    cy.url().should('include', '/plant/');
  });

  it('should show filtered results for search query', () => {
    cy.visit('/plants');
    cy.url().should('include', 'plants');
    cy.get('.searchbar').should('be.visible').type('monstera', { force: true });
    cy.get('.all-boxes .plant-box').should('have.length.greaterThan', 0);
    cy.get('.all-boxes .plant-box').each(($el) => {
      cy.wrap($el).find('.plant-name').should('contain.text', 'Monstera');
    });
  });
});
