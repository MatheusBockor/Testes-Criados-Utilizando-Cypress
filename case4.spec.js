context('Case 4', () => {
    beforeEach(() => {
        cy.visit('https://www.kabum.com.br/')
        cy.viewport(1240, 960)
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })

    it('Especializar o resultado de um filtro, usando categorias como: marca, tipo, função, estado, etc… Verificar que o número de resultados encontrados reduz.', () => {
        cy.get("input:visible[class='sprocura']").type('tv');
        cy.get("input:visible[id='bt-busca']").click();
        let totalBeforeFilter;
        cy.get("div[class='sc-fznWOq hEjrXm']").eq(0).click();
        cy.get("div[class='atual']").eq(0)
            .then($total => totalBeforeFilter = $total.text());
        // seleciona um filtro
        cy.get("div[class='sc-fzoYHE gXnDyx'] > div:contains('Samsung')").click();
        // verifica se a quantidade de paginas diminuiu
       //cy.get("div[class='sc-fznWOq hEjrXm']").eq(0).click();
        cy.get("div[class='atual']").eq(0)
            .then($total2 => expect($total2.text()).to.not.equal(totalBeforeFilter));
        
    })

})