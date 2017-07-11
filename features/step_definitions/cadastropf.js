let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;

module.exports = function() {


    // Contexto
    this.Given(/^que estou na tela de cadastro de pessoa física$/, function (callback) {
        callback(null, 'pending');
    });

    // I
    this.When(/^preencho todos os campos da tela de cadastro$/, function (callback) {
        callback(null, 'pending');
    });

    // Todos
    this.When(/^clico no botão de cadastro de cliente$/, function (callback) {
        callback(null, 'pending');
    });

    // I
    this.Then(/^visualizo a mensagem de cadastro de cliente realizado com sucesso$/, function (callback) {
        callback(null, 'pending');
    });
}