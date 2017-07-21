let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;

const Inicial = require('../page_objects/acessatelacadastro.po.js');
const Cadastro = require('../page_objects/cadastrocliente.po.js');


module.exports = function() {

    const inicial = new Inicial();
    const cadastro = new Cadastro();

    // Contexto
    this.Given(/^que estou na tela de cadastro de pessoa física$/, {timeout: 1000 * 1000} ,function (callback) {
        inicial.visitar().then(callback);
    });

    // I
    this.When(/^preencho todos os campos da tela de cadastro$/, {timeout: 1000 * 1000},function (callback) {
        inicial.digitaremail().then(callback); // Digita e-mail na primeira tela e clica no botao de cadastro
        inicial.cadastrocompleto().then(callback);
        //browser.driver.sleep(5000);
    });

    // Todos
    this.When(/^clico no botão de cadastro de cliente$/, function (callback) {
        inicial.clickCadastro().then(callback);
        //callback(null, 'pending');
    });

    // I
    this.Then(/^visualizo a mensagem de cadastro de cliente realizado com sucesso$/, function (callback) {
        callback(null, 'pending');
    });

    // II
    this.When(/^preencho o campo de e\-mail com um e\-mail já cadastrado$/, function (callback) {
        inicial.emailjacadastrado().then(callback);
    });

    // II
    this.When(/^clico no botão cadastrar$/, function (callback) {
        inicial.clicarbotaocadastrar().then(callback);
    });

    // II
    this.Then(/^visualizo a mensagem de cliente já cadastrado$/, function (callback) {
        browser.driver.sleep(2000);
        expect(element(by.css('.close')).isDisplayed()).to.eventually.be.true.and.notify(callback);
        //callback(null, 'pending');
    });

    // III
    this.When(/^não preencho os campos obrigatórios$/, function (callback) {
        inicial.digitaremail().then(callback);
        //callback(null, 'pending');
    });

    // III
    this.Then(/^não consigo realizar o cadastro com sucesso$/, function (callback) {
        var elm = element(by.id('id_tipo_0'));
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(elm), 10000);
        //elm.click();
        expect(element(by.id('id_tipo_0')).isDisplayed()).to.eventually.be.true.and.notify(callback);
        //callback(null, 'pending');
    });
    
}