let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;

const Inicial = require('../page_objects/acessatelacadastro.po.js');

module.exports = function() {

    const inicial = new Inicial();

       this.Given(/^que eu não tenha cadastrado um cliente$/, {timeout: 10 * 1000}, function (callback) {
         inicial.visitar().then(callback);
       });

       this.When(/^cadastro um novo cliente$/, {timeout: 20 * 1000}, function (callback) {
         inicial.DigitarEmailPrimeiraTela();
         //const page = inicial.ClicarNoBotaoPrimeiratela();
         inicial.ClicarNoBotaoPrimeiratela();
         var elm = element(by.id('id_tipo_0'));
         var EC = protractor.ExpectedConditions;
         browser.wait(EC.elementToBeClickable(elm), 10000);
         inicial.CadastrarClienteValido();
         inicial.ClicarBotaoCadastrarFormCadastro().then(callback);
       });

       this.Then(/^visualizo a mensagem de cadastro de cliente realizado com sucesso$/, function(callback) {
        var elm = element(by.css('.close'));
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(elm), 10000);
        expect(element(by.css('.close')).isDisplayed()).to.eventually.be.true.and.notify(callback);
        });

        this.Then(/^faço logoff$/, function (callback) {
          inicial.Logoff().then(callback);
        });

       this.Given(/^que eu tenha cadastrado um cliente$/, function (callback) {
        var elm = element(by.css('.bem-vindo'));
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(elm), 10000); 
        inicial.visitar().then(callback);
       });

       this.When(/^cadastro um cliente já existente$/, {timeout: 10 * 1000} ,function (callback) {
         inicial.EmailJaCadastrado();
         inicial.ClicarNoBotaoPrimeiratela().then(callback);
       });

       this.Then(/^visualizo a mensagem de cliente já cadastrado$/, function (callback) {
          var elm = element(by.css('.close'));
          var EC = protractor.ExpectedConditions;
          browser.wait(EC.elementToBeClickable(elm), 10000);
          expect(element(by.css('.close')).isDisplayed()).to.eventually.be.true.and.notify(callback);
       });

       this.When(/^cadastro um cliente sem preencher as informações$/, function (callback) {
         inicial.DigitarEmailPrimeiraTela();
         inicial.ClicarNoBotaoPrimeiratela();
         var elm = element(by.id('id_tipo_0'));
         var EC = protractor.ExpectedConditions;
         browser.wait(EC.elementToBeClickable(elm), 10000);
         inicial.ClicarBotaoCadastrarFormCadastro().then(callback);
       });

       this.Then(/^não consigo realizar o cadastro com sucesso$/, function (callback) {
         var elm = element(by.id('id_tipo_0'));
         var EC = protractor.ExpectedConditions;
         browser.wait(EC.elementToBeClickable(elm), 10000);
         expect(element(by.id('id_tipo_0')).isDisplayed()).to.eventually.be.true.and.notify(callback);
       });

}