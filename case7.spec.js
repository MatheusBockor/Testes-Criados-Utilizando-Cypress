context('Case 7', () => {
    beforeEach(() => {
        cy.visit('https://www.kabum.com.br/')
        cy.viewport(1240, 960)
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })

    it('Ao selecionar um produto específico, visualizar a imagem do produto. Verificar que é possível navegar diferentes imagens disponíveis', () => {
        cy.get("input:visible[class='sprocura']").type('tv');
        cy.get("input:visible[id='bt-busca']").click();
        cy.get("a[class='sc-fzoLsD gnrNhT item-nome']").eq(0).click();
        //Clica na primeira imagem da lista de imagens
       // cy.get("li[class='flex-active-slide']").eq(0).click({force: true});
        //Clica na segunda imagem da lista de imagens
        cy.get("li[style='width: 58px; float: left; display: block;']").eq(1).click({force: true});
        cy.wait(5000);
        cy.get("li[style='width: 58px; float: left; display: block;']").eq(2).click({force: true});
       
    })

})