# language: pt
Funcionalidade: Cadastro de Pessoa Física

  @nok
  Cenário: Realizar cadastro preenchendo todos os campos
    Dado que o usuário não tenha cadastrado um cliente
    Quando cadastrar um novo cliente
    Então visualiza a mensagem "Cliente criado com sucesso."

  @ok
  Cenário: Não cadastrar e-mail já cadastrado
    Dado que o usuário tenha cadastrado um cliente
    Quando cadastrar um cliente já existente
    Então visualiza a mensagem de cliente já cadastrado

  @ok
  Cenário: Não cadastrar sem preencher os campos obrigatórios
    Dado que o usuário não tenha cadastrado um cliente
    Quando criar uma conta sem preencher os dados obrigatórios
    Então visualiza os campos obrigatórios destacados
  
  @nok
  Cenário: Inserir um CEP inválido
    Dado que o usuário não tenha cadastrado um cliente
    Quando cadastrar um novo cliente com CEP inválido
    Então visualiza a mensagem informando que o CEP é inválido

  @nok
  Cenário: Cancelar cadastro de cliente
    Dado que o usuário não tenha cadastrado um cliente
    Quando preencher os campos obrigatórios
    Mas cancelar o cadastro
    Então visualiza a tela inicial do cadastro