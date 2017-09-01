let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;

const PageObjectCadastro = require('../page_objects/acessatelacadastro.po.js');

module.exports = function() {

    const pageobjectCadastro = new PageObjectCadastro();

       this.Given(/^que eu não tenha cadastrado um cliente$/, {timeout: 20 * 1000}, function (callback) {
        pageobjectCadastro.visit().then(callback);
       });

       this.When(/^cadastro um novo cliente$/, {timeout: 20 * 1000}, function (callback) {
         pageobjectCadastro.enteremailfirstscreen();
         pageobjectCadastro.clickbuttonfirstscreen();
         let elm = element(by.id('id_tipo_0'));
         let EC = protractor.ExpectedConditions;
         browser.wait(EC.elementToBeClickable(elm), 10000);
         pageobjectCadastro.registervalidclient();
         pageobjectCadastro.clickbuttonregisterform().then(callback);
       });

       this.Then(/^visualizo a mensagem de cadastro de cliente realizado com sucesso$/, function(callback) {
        let elm = element(by.css('.close'));
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(elm), 10000);
        expect(element(by.css('.close')).isDisplayed()).to.eventually.be.true.and.notify(callback);
        });

        this.Then(/^faço logoff$/, function (callback) {
          pageobjectCadastro.Logoff().then(callback);
        });

       this.Given(/^que eu tenha cadastrado um cliente$/, {timeout: 10 * 1000}, function (callback) {
        let elm = element(by.css('.bem-vindo'));
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(elm), 10000); 
        pageobjectCadastro.visit().then(callback);
       });

       this.When(/^cadastro um cliente já existente$/, {timeout: 10 * 1000} ,function (callback) {
        pageobjectCadastro.alreadyregistered();
        pageobjectCadastro.clickbuttonfirstscreen().then(callback);
       });

       this.Then(/^visualizo a mensagem de cliente já cadastrado$/, function (callback) {
          let elm = element(by.css('.close'));
          let EC = protractor.ExpectedConditions;
          browser.wait(EC.elementToBeClickable(elm), 10000);
          expect(element(by.css('.close')).isDisplayed()).to.eventually.be.true.and.notify(callback);
       });

       this.When(/^cadastro um cliente sem preencher as informações$/, function (callback) {
         pageobjectCadastro.enteremailfirstscreen();
         pageobjectCadastro.clickbuttonfirstscreen();
         let elm = element(by.id('id_tipo_0'));
         let EC = protractor.ExpectedConditions;
         browser.wait(EC.elementToBeClickable(elm), 10000);
         pageobjectCadastro.clickbuttonregisterform().then(callback);
       });

       this.Then(/^não consigo realizar o cadastro com sucesso$/, function (callback) {
         let elm = element(by.id('id_tipo_0'));
         let EC = protractor.ExpectedConditions;
         browser.wait(EC.elementToBeClickable(elm), 10000);
         expect(element(by.id('id_tipo_0')).isDisplayed()).to.eventually.be.true.and.notify(callback);
       });

}