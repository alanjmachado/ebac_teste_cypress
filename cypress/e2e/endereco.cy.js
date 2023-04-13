/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })

    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Lucio', 'Master', 'BlackRock', 'Brasil', 'Rua Adolfo Jose de Assis', '1105', 'Itajai','Santa Catarina', '88303530', '47999999999', 'alan@gmail.com')
        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')        
    });
});