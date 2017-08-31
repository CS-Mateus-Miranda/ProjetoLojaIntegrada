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

//2) Scenario: Realizar cadastro preenchendo todos os campos - features/cadastropf.feature:4
  // Step: Quando cadastro um novo cliente - features/cadastropf.feature:6
//Message:
    // Undefined. Implement with the following snippet:

       this.When(/^cadastro um novo cliente$/, {timeout: 10 * 1000}, function (callback) {
         inicial.DigitarEmailPrimeiraTela().then(callback);
         inicial.ClicarNoBotaoPrimeiratela().then(callback);
         //var teste = 'teste';
         //console.log(teste);
         var elm = element(by.id('id_tipo_0'));
         var EC = protractor.ExpectedConditions;
         browser.wait(EC.elementToBeClickable(elm), 10000);
         inicial.CadastrarClienteValido().then(callback);
         //browser.driver.sleep(2000);
       });

  //3) Scenario: Realizar cadastro preenchendo todos os campos - features/cadastropf.feature:4
  //Step: Então visualizo a mensagem de cadastro de cliente realizado com sucesso - features/cadastropf.feature:7
  // Message:
  //   Undefined. Implement with the following snippet:

       this.Then(/^visualizo a mensagem de cadastro de cliente realizado com sucesso$/, function(callback) {
          // Write code here that turns the phrase above into concrete actions
          callback(null, 'pending');
        });

       this.Given(/^que eu tenha cadastrado um cliente$/, function (callback) {
         inicial.visitar().then(callback);
       });

       this.When(/^cadastro um cliente já existente$/, {timeout: 10 * 1000} ,function (callback) {
         inicial.EmailJaCadastrado().then(callback);
         inicial.ClicarNoBotaoPrimeiratela().then(callback)
       });

       this.Then(/^visualizo a mensagem de cliente já cadastrado$/, function (callback) {
          var elm = element(by.css('.close'));
          var EC = protractor.ExpectedConditions;
          browser.wait(EC.elementToBeClickable(elm), 10000);
          expect(element(by.css('.close')).isDisplayed()).to.eventually.be.true.and.notify(callback);
       });

       this.When(/^cadastro um cliente sem preencher as informações$/, function (callback) {
         inicial.DigitarEmailPrimeiraTela().then(callback);
         inicial.ClicarNoBotaoPrimeiratela().then(callback);
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