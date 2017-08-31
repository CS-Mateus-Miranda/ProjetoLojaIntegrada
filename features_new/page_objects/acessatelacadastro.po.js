'use strict';
var Helper = require('../page_objects/Helper.js');
class Acessa{


    visitar(){
        browser.get('https://tghcastro.lojaintegrada.com.br');
        return element(by.css('.bem-vindo')).click();
    }

    DigitarEmailPrimeiraTela(){
        this.email = element(by.css('#id_email.span8'));
        var faker = require('faker.js-master');
        var randomEmail = faker.internet.email();
        const email = randomEmail;
        return this.email.sendKeys(randomEmail);
    }

    ClicarNoBotaoPrimeiratela(){
        return this.botaoprimeiratela = element(by.css('#id_email+ .principal')).click();
    }

    CadastrarClienteValido()
    {
        var elm = element(by.id('id_nome'));
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(elm), 10000);

        this.confemail = element(by.css('#id_confirmacao_emai')).sendKeys('teste');
        this.senha = element(by.css('#id_senha')).sendKeys('senhaforte');
        this.confsenha = element(by.css('#id_confirmacao_senha')).sendKeys('senhaforte');
        this.nome = element(by.css('#id_nome')).sendKeys('Mateus Miranda');
        this.cpf = element(by.css('#id_cpf')).sendKeys('871.275.606-76');
        this.celular = element(by.css('#id_telefone_celular')).sendKeys('(92) 98333-4542');
        this.cep = element(by.css('#id_cep')).sendKeys('30642-050');
        return this.numero = element(by.css('#id_numero')).sendKeys('10');
    }

    EmailJaCadastrado(){
        return this.email = element(by.css('#id_email.span8')).sendKeys('mateus.miranda@concrete.com.br'); 
    }

    ClicarBotaoCadastrarFormCadastro(){
        return this.botao = element(by.css('.botao.principal')).click();
    }
}

module.exports = Acessa;