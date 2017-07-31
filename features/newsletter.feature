# language: pt
Funcionalidade: Cadastro de Newsletter

  Cenário: Cadastrar e-mail válido na Newsletter
    Dado que ainda não tenha cadastrado um e-mail válido
    Quando cadastro esse e-mail
    Então visualizo a mensagem de cadastro realizado com sucesso

  Cenário: Preencher campo com e-mail com e-mail ja cadastrado
    Dado que eu ja tenha um e-mail válido cadastrado
    Quando cadastro este e-mail
    Então visualizo a mensagem de e-mail ja cadastrado

  Cenário: Cadastrar e-mail no formato inválido
    Dado que eu esteja na home da Loja Integrada
    Quando cadastro um e-mail inválido
    Então não consigo realizar o cadastro  
  
  Cenário: Cadastrar na Newsletter sem preencher o e-mail
    Dado que eu esteja na home da Loja Integrada
    Quando não preencho o e-mail
    Então não consigo realizar o cadastro  