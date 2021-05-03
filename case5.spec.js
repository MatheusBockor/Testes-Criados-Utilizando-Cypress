context('Case 5', () => {
    beforeEach(() => {
        cy.visit('https://www.kabum.com.br/')
        cy.viewport(1240, 960)
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })

    it('Ao selecionar um produto específico, verificar que existem diferentes formas de pagamento ou parcelamento disponíveis.', () => {
        cy.get("input:visible[class='sprocura']").type('tv');
        cy.get("input:visible[id='bt-busca']").click();
        //Seleciona o primeiro item
        cy.get("a[class='sc-fzoLsD gnrNhT item-nome']").eq(0).click();
        //Verifica a quantidade de parcelas
        cy.get("ul[class='first'] li:contains('1x')");
        cy.get("ul[class='first'] li:contains('2x')");
        cy.get("ul[class='first'] li:contains('3x')");
        cy.get("ul[class='first'] li:contains('4x')");
        cy.get("ul[class='first'] li:contains('5x')");
        cy.get("ul[class='first'] li:contains('6x')");
    })

})