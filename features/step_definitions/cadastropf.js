let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;

const Inicial = require('../page_objects/acessatelacadastro.po.js');
const Cadastro = require('../page_objects/cadastrocliente.po.js');


module.exports = function() {

    const inicial = new Inicial();
    const cadastro = new Cadastro();

    // CENARIO 1
    this.Given(/^que eu não tenha cadastrado um cliente$/, {timeout: 10 * 1000}, function (callback) {
         //inicial.visitar().then(callback)
         //inicial.digitaremail().then(callback)
         callback(null, 'pending');
       });
    // CENARIO 1
    this.When(/^cadastro um novo cliente$/, function (callback) {
         callback(null, 'pending');
       });
    // CENARIO 1
    this.Then(/^visualizo a mensagem de cadastro de cliente realizado com sucesso$/, function (callback) {
         callback(null, 'pending');
    });
    

    // CENARIO 2
    this.Given(/^que eu tenha cadastrado um cliente$/, {timeout: 10 * 1000}, function (callback) {
         inicial.visitar().then(callback)
       });
    // CENARIO 2
    this.When(/^cadastro um cliente já existente$/, function (callback) {
         inicial.emailjacadastrado().then(callback)
         inicial.clicarbotaocadastrar().then(callback)
       });
    // CENARIO 2
    this.Then(/^visualizo a mensagem de cliente já cadastrado$/, function (callback) {
        browser.driver.sleep(2000)
        expect(element(by.css('.close')).isDisplayed()).to.eventually.be.true.and.notify(callback)
    });


    // CENARIO 3
    this.When(/^cadastro um cliente sem preencher as informações$/, function (callback) {
         inicial.digitaremail().then(callback)
         inicial.clickCadastro().then(callback)
       });
    // CENARIO 3
    this.Then(/^não consigo realizar o cadastro com sucesso$/, function (callback) {
        var elm = element(by.id('id_tipo_0'))
        var EC = protractor.ExpectedConditions
        browser.wait(EC.elementToBeClickable(elm), 10000)
        expect(element(by.id('id_tipo_0')).isDisplayed()).to.eventually.be.true.and.notify(callback)
    });

    
}