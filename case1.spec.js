context('Case 1', () => {
    beforeEach(() => {
        cy.visit('https://www.kabum.com.br/')
        cy.viewport(1240, 960)
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        
    })
    
    it('Encontrar  produtos a partir de um expressão de pesquisa (ex: "smartphone"). Verificar que o resultado apresenta resultados contendo o texto da busca.', () => {
        cy.get("input:visible[class='sprocura']").type('tv');
        cy.get("input:visible[id='bt-busca']").click();
        // verifica que existem 30 elementos com o atributo 'to' com a classe "sc-fzqARJ eITELqe" 
        cy.get("div[class='sc-fzqARJ eITELq']").should('have.length', 30);
    })

})