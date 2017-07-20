let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;

const NewsLetter = require('../page_objects/newsletter.po.js');
const Resultado = require('../page_objects/resultado.po.js');

module.exports = function() {

    const newsletter = new NewsLetter();
    const resultado = new Resultado();

    // Contexto
    this.Given(/^que eu esteja na home da Loja Integrada$/, {timeout: 10 * 1000 }, function (callback) {
        newsletter.visit().then(callback);
    });

    // I
    this.When(/^preencho o campo de e\-mail$/, function (callback) {
        var imeiu = newsletter.stringaleatoria();
        newsletter.preencheremail(imeiu).then(callback);
    });

    // Todos
    this.When(/^clico no botão de cadastro$/, function (callback) {
        newsletter.clicarnobotaonewsletter().then(callback);
    });

    // I
    this.Then(/^visualizo a mensagem de cadastro realizado com sucesso$/, function (callback) {
        browser.driver.sleep(2000);
        expect(element(by.css('.icon-3x')).isDisplayed()).to.eventually.be.true.and.notify(callback);
    });

    // II
    this.When(/^preencho o campo de e\-mail com um e\-mail ja cadastrado$/, function (callback) { 
        newsletter.preencheremail('miranda@miranda102.com').then(callback);
    });

    // II   
    this.Then(/^visualizo a mensagem de e\-mail ja cadastrado$/, function (callback) {
        //browser.driver.sleep(4000);
        var elm = element(by.css('.text-error'));
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(elm), 10000);
        expect(element(by.css('.text-error')).isDisplayed()).to.eventually.be.true.and.notify(callback);
    });

    // III
    this.When(/^preencho o campo de e\-mail com formato inválido$/, function (callback) {
        newsletter.preencheremail('miranda').then(callback);
    });

    // III
    this.Then(/^não consigo realizar o cadastro$/, {timeout: 10 * 1000} ,function (callback) {
        browser.driver.sleep(2000);
        expect(element(by.css('.icon-3x')).isDisplayed()).to.eventually.be.false.and.notify(callback);
    });

    // IV
    this.When(/^não preencho o campo de e\-mail$/, function (callback) {
        newsletter.preencheremail('').then(callback);
    });
}

