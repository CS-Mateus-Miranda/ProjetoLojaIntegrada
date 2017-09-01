'use strict';
const faker = require('faker.js-master');
class Newsletter{

    visit(){
        return browser.get('http://tghcastro.lojaintegrada.com.br/');
    }
    
    writeemail(email){
        this.inputemail = element(by.name('email'));
        return this.inputemail.sendKeys(email);
    }

    newemail(){
        let randomEmail = faker.internet.email();
        this.inputemail = element(by.name('email'));
        return this.inputemail.sendKeys(randomEmail);
    }

    clickbuttonnewsletter(){
        this.btnEnviar = element(by.css('.newsletter-assinar'));
        return this.btnEnviar.click();
    }

}
module.exports =  Newsletter;