// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
// Escreva uma função que recebe dois números e retorna a soma deles.
function soma(num1, num2) {
  
  return num1 + num2
}

// EXERCÍCIO 0B
// Escreva uma função que pede ao usuário uma mensagem e a imprime no console.
function imprimeMensagem() {

  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
// Escreva uma função que pede ao usuário a altura e a largura (nessa ordem) de um retângulo
// e imprime no console a área do retângulo.

// Para calcular a área de um retangulo utiliza-se uma variavel pra altura, outra pra largura e
// uma pra receber o resultado da multiplicação das duas variaveis, depois imprime no console.

function calculaAreaRetangulo() {
  const altura = Number(prompt("Digite a altura desejada:"))
  const largura = Number(prompt("Digite a largura desejada:")) 

  const area = altura * largura

  console.log(area)
}

// EXERCÍCIO 02

// Escreva uma função que pede ao usuário o ano atual e seu ano de nascimento
// e imprima no console sua idade.

// Para calcular a idade utiliza-se uma variavel para o ano atual e outra para o ano de nascimento
// e outra pra receber o resultado da subtração das duas variaveis, depois imprime no console.

function imprimeIdade() {
  const anoAtual = Number(prompt("Digite o ano atual:"))
  const anoNasc = Number(prompt("Digite seu ano de nascimento:"))

  const idade = anoAtual - anoNasc

  console.log(idade)
}

// EXERCÍCIO 03
// Escreva uma função que recebe o peso em kg e a altura em metros de uma pessoa
// e retorna o seu IMC (Índice de Massa Corporal).

// Para calcular o IMC apenas divide o peso pela altura x altura e retorna na função.

function calculaIMC(peso, altura) {

return peso / (altura * altura)
}

// EXERCÍCIO 04
// Escreva uma função que pede ao usuário seu nome, sua idade e seu email (nessa ordem),
// e imprime no console uma mensagem como a seguinte:
// "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

// Para fazer impressões de informação de usuário, basta fazer uma variável para receber cada
// informação pedida no prompt e dar um console.log com `string desejada` com ${variavel} sempre
// que necessário informar alguma variável informada no prompt.

function imprimeInformacoesUsuario() {

  const nome = prompt("Digite seu nome:")
  const idade = prompt("Digite sua idade:")
  const email = prompt("Digite seu email:")

  console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
// Escreva uma função que pergunta ao usuário suas três cores favoritas e imprime no
// console um array que contenha essas três cores.

// Para imprimir um array deve-se atribuir uma variável que receberá todas as outras variáveis
// dentro de [], assim dando o console apenas na array criada.

function imprimeTresCoresFavoritas() {

  const corFav1 = prompt("Digite sua cor favorita:")
  const corFav2 = prompt("Digite sua segunda cor favorita:")
  const corFav3 = prompt("Digite sua terceira cor favorita:")

  const arrayCor = [corFav1, corFav2, corFav3] 

  console.log (arrayCor)
}

// EXERCÍCIO 06
// Escreva uma função que recebe uma string e retorna ela em letra maiúscula.

// Para retornar uma string em letra maiúscula utiliza-se return com a variavel string.toUpperCase()

function retornaStringEmMaiuscula(string) {
  
  return string.toUpperCase()
}

// EXERCÍCIO 07
// Escreva uma função que recebe o custo de um espetáculo de teatro e o valor de cada ingresso
// (considere que todos os ingressos têm o mesmo preço) e retorna quantos ingressos precisam
// ser vendidos para que o espetáculo não dê prejuízo.

// Para retornar o calculo do custo do evento por preço do ingresso basta retornar a divisão
// do custo total do espetaculo pelo valor do ingresso.

function calculaIngressosEspetaculo(custo, valorIngresso) {

  return custo / valorIngresso
}

// EXERCÍCIO 08
// Escreva uma função que recebe duas strings e retorna um booleano (true ou false)
// indicando se elas possuem o mesmo tamanho.

// Para retornar se uma variavel tem a mesma quantidade de caracteres de outra variavel utiliza-se
// return variavel.length === variavel.length

function checaStringsMesmoTamanho(string1, string2) {
  
  return string1.length === string2.length
}

// EXERCÍCIO 09
// Escreva uma função que recebe um array e retorna o primeiro elemento.

// Para retornar a posição de um array, utiliza-se return array[posição do elemento desejado]
// no caso do primeiro elemento lembrar de sempre começar do 0.

function retornaPrimeiroElemento(array) {
  
  return array[0]
}

// EXERCÍCIO 10
// Escreva uma função que recebe um array e retorna o último elemento.

// Utiliza-se return nome do array.pop() para e remover e informar o último elemento do array.

function retornaUltimoElemento(array) {

  return array.pop()
}

// EXERCÍCIO 11
// Escreva uma função que recebe um array e retorna um array com o primeiro e o
// último elemento trocados.

// Para resolver essa questão, basta criar duas variáveis cujo a primeira removerá o primeiro
// elemento do array e a segunda removerá o último. Para isso utiliza-se nome do array.shift()
// para remover o primeiro elemento e nome do array.pop() para remover o último elemento.
// Após fazer isso, deve-se utilizar nome do array.unshift(nome da variavel do último elemento)
// para adicionar o último elemento no início do array e nome do array.push(nome da variavel do
// primeiro elemento) para adicionar o primeiro elemento no final do array. Depois, return array.

function trocaPrimeiroEUltimo(array) {

  const first = array.shift();
  const last = array.pop();

  array.unshift(last);
  array.push(first);

  return array
}

// EXERCÍCIO 12
// Escreva uma função que recebe duas strings e retorna um booleano (true ou false) indicando
// se elas são iguais, desconsiderando letras maiúsculas ou minúsculas.

// Para comparar se uma string é igual a outra desconsiderando maiúsculas e minúsculas
// utilizamos string1.toLoweCase() === string2.toLowerCase(). Assim, compararemos se o valor e o tipo da string1
// é igual ao valor e o tipo da string2.
// Lembrando que == valores iguais, === valores e tipos iguais.

function checaIgualdadeDesconsiderandoCase(string1, string2) {

return string1.toLowerCase() === string2.toLowerCase()
}

// EXERCÍCIO 13
/* Escreva uma função que pergunta ao usuário o ano atual, o ano de nascimento de uma pessoa,
e o ano em que sua carteira de identidade foi emitida (nessa ordem). A função deve imprimir
no console um booleano (true ou false) que indica se a carteira precisa ser renovada ou não.
A carteira precisa ser renovada segundo os seguintes critérios:

- Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos
(se for exatamente 5 anos, deve ser renovada).

- Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos
(se for exatamente 10 anos, deve ser renovada).

- Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos
*/

/* Para resolução desse exercício é necessário criar 3 variáveis, uma para receber o ano atual,
outra para receber o ano de nascimento e outra para receber o ano de emissão do RG.
Após isso, criar duas variáveis para receber o cálculo do que está sendo pedido, nesse caso
a primeira variavel recebe ano atual - ano de nascimento e a segunda recebe ano atual - emissão RG.
Criei uma variável para receber a resolução do problema onde:

Se a variável idade for menor ou igual a 20 e variável renovação do RG maior ou igual a 5 ou
20 for menor ou igual a variável idade e variável idade for menor ou igual a 50 e renovação do RG for maior que 10 ou
variável idade for maior que 50 variável renovação do RG for maior ou igual a 15 */

/* Lembrando que:
menor ou igual = <=
maior ou igual = >=
maior = >
e = &&
ou = || */

// Quando eu faço o e (&&) as duas condições precisam ser verdadeiras
// No caso do ou (||) "faz o papel" de senão (verificar tabela verdade)


// Após finalizar, dar um console.log(variável de resolução)

function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Digite o ano atual"))
  const anoNasc = Number(prompt("Digite seu ano de nascimento"))
  const anoEmissaoRG = Number(prompt("Digite o ano de emissão do seu RG"))

  const idade = anoAtual - anoNasc
  const renovacaoRG = anoAtual - anoEmissaoRG

  const resolucao = (idade <= 20 && renovacaoRG >= 5) ||
  ((20 <= idade && idade <= 50) && renovacaoRG >= 10) ||
  (idade > 50 && renovacaoRG >= 15)

  console.log(resolucao)
}

// EXERCÍCIO 14
/* Escreva uma função que recebe um ano e retorna um booleano (true ou false) que indica se o ano é bissexto.
Um ano é bissexto de acordo com as seguintes condições:

- São bissextos todos os anos múltiplos de 400.
- São bissextos todos os múltiplos de 4, exceto se for múltiplo de 100 mas não de 400.
- Não são bissextos todos os demais anos. */

/* Para resolver esse exercício retornamos se a variável ano é divisível por 400 ou
se variável ano é divisível por 4 e se varivável ano é não é divisível por 100 */

/* Lembrando que:
Saber se algo é divisível por algum número utilizamos % número === 0
ou = ||
e = &&
Saber se algo não é divisível por algum número utilizamos % número !== 0
*/

function checaAnoBissexto(ano) {
  
  return ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0)
}

// EXERCÍCIO 15
/* Escreva uma função que faz as seguintes perguntas ao usuário (condições para ser uma pessoa estudante da Labenu):

- Você tem mais de 18 anos?
- Você possui ensino médio completo?
- Você possui disponibilidade exclusiva durante os horários do curso?

O usuário deve responder essas perguntas com `"sim"` ou `"nao"`.

A função deve imprimir no console um booleano (true ou false) que indica se a inscrição para o curso é válida,
ou seja, se o usuário pode ou não fazer o curso da Labenu.
A inscrição é válida quando todas as respostas para todas as perguntas for positiva. */

/* Seguindo o modelo e lógica das últimas questões, utilizei 3 variáveis para receber maior idade, ensino médio completo e
dispobibilidade de horário respectivamente, onde deixei que a resposta das 3 ficassem em letras minúsculas quando fosse comparar
para evitar bugs em respostas escritas diferentes. E criei uma variável de resolução para receber o comparativo, sendo:
Se a variável maior idade for igual a sim e variável ensino médio completo também for igual a sim e disponibilidade de horário
também for igual a sim, a pessoa estará apta a fazer o curso da Labenu. Pois o favor booleano reproduzido pelas 3 variáveis será true */
// Após isso, console.log(variável de resolução)

/* Lembrando que:
Para deixar as letras de uma variável minúscula utiliza-se: variavel.toLowerCase()
Para comparar valor e tipo de algo utiliza-se: algo === algo (resposta em booleano "true or false")
e = && */

function checaValidadeInscricaoLabenu() {
  const maiorDeIdade = prompt("Você tem mais de 18 anos? (sim ou não)")
  const ensinoMedioCompleto = prompt("Você possui ensino médio completo? (sim ou não)")
  const dispHorario = prompt("Você possui disponibilidade exclusiva durante os horários do curso? (sim ou não)")

  maiorDeIdade.toLowerCase()
  ensinoMedioCompleto.toLowerCase()
  dispHorario.toLowerCase()

  const resolucao = (maiorDeIdade === "sim" && ensinoMedioCompleto === "sim" && dispHorario === "sim")

  console.log(resolucao)
}