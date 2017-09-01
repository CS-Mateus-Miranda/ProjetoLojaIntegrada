'use strict';
const faker = require('faker.js-master');
class Acessa{

    constructor(){
        this.emailprincipal = null;
    }

    visit(){
        browser.get('https://tghcastro.lojaintegrada.com.br');
        return element(by.css('.bem-vindo')).click();
    }

    enteremailfirstscreen(){
        this.email = element(by.css('#id_email.span8'));
        let randomEmail = faker.internet.email();
        const email = randomEmail;
        this.emailprincipal = randomEmail;
        return this.email.sendKeys(randomEmail);
    }

    clickbuttonfirstscreen(){
         return this.clickButton = element(by.css('#id_email+ .principal')).click();
    }

    Logoff()
    {
        this.dropLogoff = element(by.css('.dropdown-toggle')).click();
        return this.linkLogoff = element(by.linkText('Sair')).click();
    }

    registervalidclient()
    {
        let elm = element(by.id('id_nome'));
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(elm), 10000);
        browser.driver.sleep(3000);
        this.inputConfemail = element(by.id('id_confirmacao_email')).sendKeys(this.emailprincipal.toLowerCase());
        this.inputSenha = element(by.css('#id_senha')).sendKeys('senhaforte');
        this.inputConfsenha = element(by.css('#id_confirmacao_senha')).sendKeys('senhaforte');
        this.inputNome = element(by.css('#id_nome')).sendKeys('Mateus Miranda');
        this.inputCpf = element(by.css('#id_cpf')).sendKeys('8');
        this.inputCpf = element(by.css('#id_cpf')).sendKeys('7');
        this.inputCpf = element(by.css('#id_cpf')).sendKeys('1');
        this.inputCpf = element(by.css('#id_cpf')).sendKeys('2');
        this.inputCpf = element(by.css('#id_cpf')).sendKeys('7');
        this.inputCpf = element(by.css('#id_cpf')).sendKeys('5');
        this.inputCpf = element(by.css('#id_cpf')).sendKeys('6');
        this.inputCpf = element(by.css('#id_cpf')).sendKeys('0');
        this.inputCpf = element(by.css('#id_cpf')).sendKeys('6');
        this.inputCpf = element(by.css('#id_cpf')).sendKeys('7');
        this.inputCpf = element(by.css('#id_cpf')).sendKeys('6');
        this.inputCelular = element(by.css('#id_telefone_celular')).sendKeys('(92) 98333-4542');
        this.inputCep = element(by.css('#id_cep')).sendKeys('3');
        this.inputCep = element(by.css('#id_cep')).sendKeys('0');
        this.inputCep = element(by.css('#id_cep')).sendKeys('6');
        this.inputCep = element(by.css('#id_cep')).sendKeys('4');
        this.inputCep = element(by.css('#id_cep')).sendKeys('2');
        this.inputCep = element(by.css('#id_cep')).sendKeys('0');
        this.inputCep = element(by.css('#id_cep')).sendKeys('5');
        this.inputCep = element(by.css('#id_cep')).sendKeys('0');
        browser.driver.sleep(3000);
        return this.inputNumero = element(by.css('#id_numero')).sendKeys('10');
    }

    alreadyregistered(){
        return this.inputEmail = element(by.css('#id_email.span8')).sendKeys('mateus.miranda@concrete.com.br'); 
    }

    clickbuttonregisterform(){
        return this.clickButton = element(by.xpath('//button[.="Criar Conta"]')).click();
    }
}

module.exports = Acessa;