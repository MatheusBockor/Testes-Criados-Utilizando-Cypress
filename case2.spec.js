context('Case 2', () => {
    beforeEach(() => {
        cy.visit('https://www.kabum.com.br/')
        cy.viewport(1240, 960)
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })

    it('Encontrar produtos e listar pelo preço, do mais barato para o mais caro. Verificar que o preço do último produto do resultado é maior do que do primeiro.', () => {
        cy.get("input:visible[class='sprocura']").type('tv');
        cy.get("input:visible[id='bt-busca']").click();
        // Listar do mais barato ao mais caro, verificar que o primeiro é mais barato que o último
        // eq(0) para pegar o primeiro select da pagina
        cy.get("select[class='sc-fzpkJw sc-fznzOf iyePbX']").eq(0) 
        .select('Preço crescente');
        cy.get("div[class='sc-fznWqX qatGF']").should(el => {
            var price1 = parseInt(el[0].textContent.replace('R$', '').replace(',', '').replace('.', ''));
            var price2 = parseInt(el[29].textContent.replace('R$', '').replace(',', '').replace('.', ''));
            expect(price1).to.be.lessThan(price2);
        });
        
    })

})