# language: pt
Funcionalidade: Cadastro de Pessoa Física

  Contexto: Estar na tela de cadastro de Pessoa Física
    Dado que estou na tela de cadastro de pessoa física

  Cenário: Realizar cadastro preenchendo todos os campos
    Quando preencho todos os campos da tela de cadastro
    E clico no botão de cadastro de cliente
    Então visualizo a mensagem de cadastro de cliente realizado com sucesso

  Cenário: Cadastrar e-mail já cadastrado
    Quando preencho o campo de e-mail com um e-mail já cadastrado
    E clico no botão cadastrar
    Então visualizo a mensagem de cliente já cadastrado