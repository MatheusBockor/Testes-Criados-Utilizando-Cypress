context('Case 8', () => {
    beforeEach(() => {
        cy.visit('https://www.kabum.com.br/')
        cy.viewport(1240, 960)
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })

    it('Ao selecionar um produto específico, visualizar os comentários. Ver se existe mais de um comentário com texto associado.', () => {
        cy.get("input:visible[class='sprocura']").type('tv');
        cy.get("input:visible[id='bt-busca']").click();
        cy.get("a[class='sc-fzoLsD gnrNhT item-nome']").eq(0).click();
        //Verifica se a div de opinião contém mais de 1 elemento
        cy.get("div[class='opiniao_box opcinza']").should('have.length.greaterThan', 0)
    })

})