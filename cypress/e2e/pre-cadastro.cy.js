/// <reference types="cypress" />
var faker = require('faker');

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
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
    
});


// describe('Funcionalidade Pré Cadastro', () => {
    
//     beforeEach(() => {
//         cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
//     });
        
//     it('Deve completar o pré cadastro com sucesso', () => {
//         //1º tela
//         cy.get('#reg_email').type('teste77@teste.com')
//         cy.get('#reg_password').type('#Usr@101929')
//         cy.get(':nth-child(4) > .button').click()

//     //     //2º tela
//     //     cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
//     //     cy.get('#account_first_name').type('Nala')
//     //     cy.get('#account_last_name').type('Esoj')
//     //     cy.get('.woocommerce-Button').click()

        
//     });
    
// });