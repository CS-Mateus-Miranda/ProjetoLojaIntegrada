'use strict';
class Newsletter{

    visit(){
        return browser.get('http://tghcastro.lojaintegrada.com.br/');
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

    preencheremail(email){
        this.inputemail = element(by.name('email'));
        return this.inputemail.sendKeys(email);
    }

    clicarnobotaonewsletter(){
        this.btnEnviar = element(by.css('.newsletter-assinar'));
        return this.btnEnviar.click();
    }

}
module.exports =  Newsletter;