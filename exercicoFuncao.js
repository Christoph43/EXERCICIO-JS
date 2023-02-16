
// 1- criando uma função que exiba uma mensagem no consle

function primeiro() {
 console.log("olá, este é o eu primeiro exercicio");
}
primeiro();

// 2 - criando uma função que recebe o meu nome
// como parametro e exiba no console

function leia(nome) {
console.log("Prazer,", nome);
}
leia("Rafael");

//3 - Criando uma função que receba nome, idade, estilo musical
// preferido (como parametros) e exiba no console

function ulti(idade, nome, estilomusical) {
  (idade = "tem 22 anos,"), (nome = "Rafael,"), (estilomusical = "R&B");

  console.log(nome, idade, estilomusical);
}
ulti();

// 4 - Criando uma função que receba um filme, uma musica
// como parametros e exiba no console

function ola(filme, musica) {
filme = "O sol azul,";
musica = "leao";
console.log(filme, musica);
}
ola();

// 5 - Criando uma função que retorne o triplo do
// numero recebido no parametro da função

function multi(a = 4) {
return a * 3;
}g
console.log(multi());

// 6 - criando uma função que verifica se uma variavel
//é true ou false

let x = 6;

function veri() {
if (x === 6) {
console.log("olá");
} else {
console.log("errou");
}
 }
veri();