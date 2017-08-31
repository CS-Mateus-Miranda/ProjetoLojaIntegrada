'use strict';
class Newsletter{

    visit(){
        return browser.get('http://tghcastro.lojaintegrada.com.br/');
    }
    
    preencheremail(email){
        this.inputemail = element(by.name('email'));
        return this.inputemail.sendKeys(email);
    }

    newemail(){
        var faker = require('faker.js-master');
        var randomEmail = faker.internet.email();
        this.inputemail = element(by.name('email'));
        return this.inputemail.sendKeys(randomEmail);
    }

    clicarnobotaonewsletter(){
        this.btnEnviar = element(by.css('.newsletter-assinar'));
        return this.btnEnviar.click();
    }

}
module.exports =  Newsletter;