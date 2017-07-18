'use strict';
var Helper = require('../page_objects/Helper.js');
class Acessa{

    visitar(){
        browser.get('https://tghcastro.lojaintegrada.com.br');
        return element(by.css('.bem-vindo')).click();
    }

    stringaleatoria(){
        var letras = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
        var aleatorio = '';
        for (var i = 0; i < 8; i++) {
            var rnum = Math.floor(Math.random() * letras.length);
            aleatorio += letras.substring(rnum, rnum + 1);
        }
        aleatorio += "@gmail.com";
    return aleatorio;
    }

    digitaremail(){
        //var generateemail = this.stringaleatoria();
        this.email = element(by.css('#id_email.span8')).sendKeys('mateus@mateus.com');
        return this.botaoconfirmar = element(by.css('#id_email+ .principal')).click();
    }

    emailjacadastrado(){
        return this.email = element(by.css('#id_email.span8')).sendKeys('mateus.miranda@concrete.com.br');   
    }

    clicarbotaocadastrar(){
        // Botão cadastrar da primeira tela.
        return this.botaoconfirmar = element(by.css('#id_email+ .principal')).click();
    }

    cadastrocompleto(){
        const helper = new Helper();
        return helper.slowType(element(by.id('id_confirmacao_email')), 'miranda@miranda2.com');
        //this.inputconfirmemail = element(by.id('id_confirmacao_email')).sendKeys('miranda@miranda2.com');
        //this.inputsenha = element(by.id('id_senha')).sendKeys('senhaforte');
        //this.inputconfirmsenha = element(by.id('id_confirmacao_senha')).sendKeys('senhaforte');
        //this.inputnome = element(by.id('id_nome')).sendKeys('Mateus Miranda');
        //this.inputcpf = element(by.id('id_cpf')).sendKeys('12677253623');
        //this.inputcelular = element(by.id('id_telefone_celular')).sendKeys('31984523244');
        //this.inputtelefone = element(by.id('id_telefone_principal')).sendKeys('3123232323');
        //this.dropsexo = element(by.id('id_sexo')).$('[value="m"]').click();
        //this.inputdtnasc = element(by.id('id_data_nascimento')).sendKeys('16061996');
        //this.inputcep = element(by.id('id_cep')).sendKeys('30642050');
        //browser.driver.sleep(5000);
        //this.inputnumero = element(by.id('id_numero')).sendKeys('111');
        //this.inputcomplemento = element(by.id('id_complemento')).sendKeys('Complemento');
        //this.inputreferencia = element(by.id('id_referencia')).sendKeys('Referencia');
        //return this.referencia = element(by.id('id_referencia')).sendkeys('Referencia');    
    }

    clickCadastro(){
        return this.botao = element(by.css('.principal')).click();
    }

    sempreenchimento(){
        return browser.driver.sleep(2000);
    }
}

module.exports = Acessa;