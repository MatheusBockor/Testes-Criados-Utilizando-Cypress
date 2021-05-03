context('Case 3', () => {
    beforeEach(() => {
        cy.visit('https://www.kabum.com.br/')
        cy.viewport(1240, 960)
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })

    it('Navegar no resultado dos produtos através do mecanismo de paginação. Verificar que ao trocar de página os produtos também são alterados.', () => {
        cy.get("input:visible[class='sprocura']").type('tv');
        cy.get("input:visible[id='bt-busca']").click();
        // Grava o nome do primeiro produto
        let firstName;
        cy.get("a[class='sc-fzoLsD gnrNhT item-nome']:first")
            .then($firstName => firstName = $firstName.text());
        // navega para segunda página
        cy.get("div[class='sc-fznWOq hEjrXm']:contains('Próxima')").eq(0).click();
        // verifica se o nome do produto alterou
        cy.get("a[class='sc-fzoLsD gnrNhT item-nome']:first")
            .then($secondName => expect($secondName.text()).to.not.equal(firstName));
        
    })

})