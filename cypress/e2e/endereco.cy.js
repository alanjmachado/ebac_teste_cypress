/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

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

    it('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[0].nome,
            dadosEndereco[0].sobrenome,
            dadosEndereco[0].empresa,
            dadosEndereco[0].pais,
            dadosEndereco[0].endereço,
            dadosEndereco[0].numero,
            dadosEndereco[0].cidade,
            dadosEndereco[0].estado,
            dadosEndereco[0].cep,
            dadosEndereco[0].telefone,
            dadosEndereco[0].email
            )
        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')        
    });

    it('Deve fazer cadastro de entrega com sucesso', () => {
        EnderecoPage.editarEnderecoEntrega('Chico', 'Bento', 'TIM', 'Brasil', 'Rua Infinita Highway', '1', 'Canoas', 'Rio Grande do Sul', '11111111')
        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')       
    });

    it.only('Deve fazer cadastro de entrega com sucesso - Usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[3].nome,
            dadosEndereco[3].sobrenome,
            dadosEndereco[3].empresa,
            dadosEndereco[3].pais,
            dadosEndereco[3].endereço,
            dadosEndereco[3].numero,
            dadosEndereco[3].cidade,
            dadosEndereco[3].estado,
            dadosEndereco[3].cep,
            )
        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')        
    });
});