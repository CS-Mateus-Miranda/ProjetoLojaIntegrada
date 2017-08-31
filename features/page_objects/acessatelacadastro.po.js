'use strict';
var Helper = require('../page_objects/Helper.js');
class Acessa{

    constructor(){
        this.emailprincipal = null;
    }

    showLoginFields () {
        this.inputSearchIdPerson = element(by.css('#id_cpf'))
        let action = browser.actions().mouseMove(this.inputSearchIdPerson).click()
        let keys = '12677253623'
     
     
        for (var i = 0; i < keys.length; i++) {
          action = action.sendKeys(keys[i])
          browser.sleep(100)
        }
     
        return action.perform()
      }

    visitar(){
        browser.get('https://tghcastro.lojaintegrada.com.br');
        return element(by.css('.bem-vindo')).click();
    }

    DigitarEmailPrimeiraTela(){
        this.email = element(by.css('#id_email.span8'));
        var faker = require('faker.js-master');
        var randomEmail = faker.internet.email();
        const email = randomEmail;
        this.emailprincipal = randomEmail;
        return this.email.sendKeys(randomEmail);
    }

    ClicarNoBotaoPrimeiratela(){
         return this.botaoprimeiratela = element(by.css('#id_email+ .principal')).click();
         //return new Inicial();
    }


    Logoff()
    {
        this.drop = element(by.css('.dropdown-toggle')).click();
        return this.logoff = element(by.linkText('Sair')).click();
    }
    

    CadastrarClienteValido()
    {
        var elm = element(by.id('id_nome'));
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(elm), 10000);
        browser.driver.sleep(3000);
        this.confemail = element(by.id('id_confirmacao_email')).sendKeys(this.emailprincipal.toLowerCase());
        
        //this.confemail = element(by.id('id_confirmacao_email')).sendKeys('teste@teste.com');
        this.senha = element(by.css('#id_senha')).sendKeys('senhaforte');
        this.confsenha = element(by.css('#id_confirmacao_senha')).sendKeys('senhaforte');
        this.nome = element(by.css('#id_nome')).sendKeys('Mateus Miranda');
        this.cpf = element(by.css('#id_cpf')).sendKeys('8');
        this.cpf = element(by.css('#id_cpf')).sendKeys('7');
        this.cpf = element(by.css('#id_cpf')).sendKeys('1');
        this.cpf = element(by.css('#id_cpf')).sendKeys('2');
        this.cpf = element(by.css('#id_cpf')).sendKeys('7');
        this.cpf = element(by.css('#id_cpf')).sendKeys('5');
        this.cpf = element(by.css('#id_cpf')).sendKeys('6');
        this.cpf = element(by.css('#id_cpf')).sendKeys('0');
        this.cpf = element(by.css('#id_cpf')).sendKeys('6');
        this.cpf = element(by.css('#id_cpf')).sendKeys('7');
        this.cpf = element(by.css('#id_cpf')).sendKeys('6');
        //showLoginFields();
        this.celular = element(by.css('#id_telefone_celular')).sendKeys('(92) 98333-4542');
        this.cep = element(by.css('#id_cep')).sendKeys('3');
        this.cep = element(by.css('#id_cep')).sendKeys('0');
        this.cep = element(by.css('#id_cep')).sendKeys('6');
        this.cep = element(by.css('#id_cep')).sendKeys('4');
        this.cep = element(by.css('#id_cep')).sendKeys('2');
        this.cep = element(by.css('#id_cep')).sendKeys('0');
        this.cep = element(by.css('#id_cep')).sendKeys('5');
        this.cep = element(by.css('#id_cep')).sendKeys('0');
        browser.driver.sleep(3000);
        return this.numero = element(by.css('#id_numero')).sendKeys('10');
    }

    EmailJaCadastrado(){
        return this.email = element(by.css('#id_email.span8')).sendKeys('mateus.miranda@concrete.com.br'); 
    }

    ClicarBotaoCadastrarFormCadastro(){
        return this.botao = element(by.xpath('//button[.="Criar Conta"]')).click();
    }
}

module.exports = Acessa;