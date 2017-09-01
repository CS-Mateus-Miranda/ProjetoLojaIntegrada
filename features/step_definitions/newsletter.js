let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;

const NewsLetter = require('../page_objects/newsletter.po.js');

module.exports = function() {

    const newsletter = new NewsLetter();

    this.Given(/^que ainda não tenha cadastrado um e\-mail válido$/, {timeout: 10 * 1000} ,function (callback) {
        newsletter.visit().then(callback);
        });

    this.When(/^cadastro esse e\-mail$/, function (callback) {
        newsletter.newemail().then(callback)
        browser.driver.sleep(2000)
        newsletter.clickbuttonnewsletter().then(callback)
        });

    this.Then(/^visualizo a mensagem de cadastro realizado com sucesso$/, function (callback) {
        let elm = element(by.css('.icon-3x'))
        let EC = protractor.ExpectedConditions
        browser.wait(EC.elementToBeClickable(elm), 10000)
        expect(element(by.css('.icon-3x')).isDisplayed()).to.eventually.be.true.and.notify(callback)
    });

    this.Given(/^que eu ja tenha um e\-mail válido cadastrado$/, {timeout: 10 * 1000} ,function (callback) {
         newsletter.visit().then(callback)
       });

    this.When(/^cadastro este e\-mail$/, function (callback) {
        newsletter.writeemail('miranda@miranda102.com').then(callback)
        browser.driver.sleep(2000)
        newsletter.clickbuttonnewsletter().then(callback)
       });   

    this.Then(/^visualizo a mensagem de e\-mail ja cadastrado$/, function (callback) {
        let elm = element(by.css('.close'));
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(elm), 10000);
        expect(element(by.css('.close')).isDisplayed()).to.eventually.be.true.and.notify(callback);
    });

    this.Given(/^que eu esteja na home da Loja Integrada$/, {timeout: 10 * 1000} ,function (callback) {
         newsletter.visit().then(callback)
      });

    this.When(/^cadastro um e\-mail inválido$/, function (callback) {
         newsletter.writeemail('miranda').then(callback)
         browser.driver.sleep(2000)
         newsletter.clickbuttonnewsletter().then(callback)
       });

    this.Then(/^não consigo realizar o cadastro$/, {timeout: 10 * 1000} ,function (callback) {
        expect(element(by.css('.icon-3x')).isDisplayed()).to.eventually.be.false.and.notify(callback);
    });

    this.When(/^não preencho o e\-mail$/, function (callback) {
         newsletter.writeemail('').then(callback)
         browser.driver.sleep(2000)
         newsletter.clickbuttonnewsletter().then(callback)
       });
}

