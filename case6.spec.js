context('Case 6', () => {
    beforeEach(() => {
        cy.visit('https://www.kabum.com.br/')
        cy.viewport(1240, 960)
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })

    it('Ao selecionar um produto específico, executar o calculo do frete para entrega. Verificar que ao inserir um CEP é retornado o custo da entrega e prazo', () => {
        cy.get("input:visible[class='sprocura']").type('tv');
        cy.get("input:visible[id='bt-busca']").click();
        cy.get("a[class='sc-fzoLsD gnrNhT item-nome']").eq(0).click();
        //Digita o CEP
        cy.get("input:visible[placeholder='Digite seu CEP']").type('89262000');
        cy.get("input:visible[class='button-calcula-cep']").click();
        //Aguarda o carregamento do Popup
        cy.wait(10000);
        //Verifica se o Popup aberto contém o título de Fretes
        cy.get ("div[id='janela1'] h4:contains('Opções de frete para sua região')");
    })

})