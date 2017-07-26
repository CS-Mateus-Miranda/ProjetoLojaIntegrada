# language: pt
Funcionalidade: Cadastro de Pessoa Física

  Cenário: Realizar cadastro preenchendo todos os campos
    Dado que eu não tenha cadastrado um cliente
    Quando cadastro um novo cliente
    Então visualizo a mensagem de cadastro de cliente realizado com sucesso

  Cenário: Cadastrar e-mail já cadastrado
    Dado que eu tenha cadastrado um cliente
    Quando cadastro um cliente já existente
    Então visualizo a mensagem de cliente já cadastrado

  Cenário: Cadastrar sem preencher os campos obrigatórios
    Dado que eu não tenha cadastrado um cliente
    Quando cadastro um cliente sem preencher as informações
    Então não consigo realizar o cadastro com sucesso
    #asdas