describe('Main page', function() {
  it('test table', function() {
    cy.visit('localhost:4200/table');
    cy.contains('Create 1,000 rows').click()
    cy.contains('Update rows').click()
    cy.contains('Swap rows').click()
    cy.contains('Clear').click()
  })
});