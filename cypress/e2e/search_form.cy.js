describe('Search Form', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')  
    })

  it('Should fill out the form and navigate to the result page', () => {
    
    cy.get('input[placeholder="Search"]').type('React') 

    
    cy.get('[data-test-id="select1"]').parent().find('select').select('Computers'); 

    cy.get('[data-test-id="select2"]').parent().find('select').select('Relevance');


    cy.get('form').submit()

  
    cy.url().should('include', '/result')


    cy.contains('Books found').should('exist');

    cy.get('[data-test-id="card"]').first().click();

    cy.url().should('match', /\/result\/\w+/);

    cy.get('[data-test-id="bookPage"]').should('exist');


  })
})
