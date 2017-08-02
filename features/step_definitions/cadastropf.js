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
    this.Given(/^que eu não tenha cadastrado um cliente$/, function (callback) {
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
    this.Given(/^que eu tenha cadastrado um cliente$/, function (callback) {
         callback(null, 'pending');
       });
    // CENARIO 2
    this.When(/^cadastro um cliente já existente$/, function (callback) {
         callback(null, 'pending');
       });
    // CENARIO 2
    this.Then(/^visualizo a mensagem de cliente já cadastrado$/, function (callback) {
         callback(null, 'pending');
    });

    // CENARIO 3
    this.Given(/^que eu não tenha cadastrado um cliente$/, function (callback) {
         callback(null, 'pending');
       });
    // CENARIO 3
    this.When(/^cadastro um cliente sem preencher as informações$/, function (callback) {
         callback(null, 'pending');
       });
    // CENARIO 3
    this.Then(/^não consigo realizar o cadastro com sucesso$/, function (callback) {
         callback(null, 'pending');
    });

    
}