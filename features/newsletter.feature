# language: pt
Funcionalidade: Cadastro de Newsletter

  Contexto: Estar na Home da Loja Integrada
    Dado que eu esteja na home da Loja Integrada

  Cenário: Cadastrar Newsletter
    Quando preencho o campo de e-mail
    E clico no botão de cadastro
    Então visualizo a mensagem de cadastro realizado com sucesso

  Cenário: Preencher campo com e-mail com e-mail ja cadastrado
    Quando preencho o campo de e-mail com um e-mail ja cadastrado
    E clico no botão de cadastro
    Então visualizo a mensagem de e-mail ja cadastrado

  Cenário: Preencher e-mail no formato inválido
    Quando preencho o campo de e-mail com formato inválido
    E clico no botão de cadastro
    Então não consigo realizar o cadastro  
  
  Cenário: Não preencho o campo e-mail e clico em cadastrar
    Quando não preencho o campo de e-mail
    E clico no botão de cadastro
    Então não consigo realizar o cadastro  