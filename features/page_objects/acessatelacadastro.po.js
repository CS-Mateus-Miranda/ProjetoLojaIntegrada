'use strict';
var CadastroCliente = require('../page_objects/cadastrocliente.po.js');
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
        var generateemail = this.stringaleatoria();
        this.email = element(by.css('#id_email.span8')).sendKeys(generateemail);
        return this.botaoconfirmar = element(by.css('#id_email+ .principal')).click();
    }

    emailjacadastrado(){
        return this.email = element(by.css('#id_email.span8')).sendKeys('mateus.miranda@concrete.com.br');   
    }

    clicarbotaocadastrar(){
        // Botão cadastrar da primeira tela.
        return this.botaoconfirmar = element(by.css('#id_email+ .principal')).click();
    }
    
    

}

module.exports = Acessa;