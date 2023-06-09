/// <reference types="cypress" />
var faker = require('faker');

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Deve completar o pré cadastro com sucesso', () => {

        var emailFaker = faker.internet.email(nomeFaker)
        var nomeFaker = faker.name.firstName()
        var sobrenomeFaker = faker.name.lastName()

        //1º tela
        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('#Usr@101929')
        cy.get(':nth-child(4) > .button').click()

        //2º tela
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });

    it('Deve completar o pré-cadastro com sucesso usando Comando customizados', () => {
        var emailFaker2 = faker.internet.email()
        cy.preCadastro(emailFaker2, 'senha!@#forte', 'Alan', 'Machado')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
    
});

