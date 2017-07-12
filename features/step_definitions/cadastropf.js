let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;

const Cadastro = require('../page_objects/acessatelacadastro.po.js');

module.exports = function() {

    const cadastro = new Cadastro();

    // Contexto
    this.Given(/^que estou na tela de cadastro de pessoa física$/, {timeout: 10 * 1000} ,function (callback) {
        cadastro.visitar().then(callback);
    });

    // I
    this.When(/^preencho todos os campos da tela de cadastro$/, function (callback) {
        cadastro.digitaremail().then(callback);
    });

    // Todos
    this.When(/^clico no botão de cadastro de cliente$/, function (callback) {
        callback(null, 'pending');
    });

    // I
    this.Then(/^visualizo a mensagem de cadastro de cliente realizado com sucesso$/, function (callback) {
        callback(null, 'pending');
    });

    // Cenário II - Quando preencho o campo de e-mail com um e-mail já cadastrado
    this.When(/^preencho o campo de e\-mail com um e\-mail já cadastrado$/, function (callback) {
        cadastro.emailjacadastrado().then(callback);
    });

    // Cenário II - E clico no botão cadastrar
    this.When(/^clico no botão cadastrar$/, function (callback) {
        cadastro.clicarbotaocadastrar().then(callback);
    });

    // Cenário II - Então visualizo a mensagem de cliente já cadastrado
    this.Then(/^visualizo a mensagem de cliente já cadastrado$/, function (callback) {
        browser.driver.sleep(2000);
        expect(element(by.css('.close')).isDisplayed()).to.eventually.be.true.and.notify(callback);
    });
    
}