// ---------- Tipos de Saída ----------
console.log("Do a barrel row");
alert("Gemini");

// ---------- Declarações, Sintaxe e Comentários ----------
let idade = 25; // Declara uma variável chamada 'idade' e atribui o valor "25"
console.log(idade); // Imprime o valor da variável 'idade' no console do navegador.

// 4 - Corrigindo erros de sintaxe (faltavam aspas finais e fechar parênteses):
let nome = "Ana"; 
console.log(nome); 


// ---------- 3 - Variáveis ----------
let nomeCompleto = "João da Silva"; // Substitua pelo seu nome
let idadePessoa = 30;
let cidade = "Chapecó";

// console
console.log("--- Dados da Pessoa ---");
console.log("Nome Completo:", nomeCompleto);
console.log("Idade:", idadePessoa);
console.log("Cidade:", cidade);


// ---------- Operadores ----------
let num1 = 15;
let num2 = 4;

console.log("--- Operações Aritméticas ---");
console.log("Soma:", num1 + num2);
console.log("Subtração:", num1 - num2);
console.log("Multiplicação:", num1 * num2);
console.log("Divisão:", num1 / num2);
console.log("Resto da divisão:", num1 % num2);

// Comparação:
let valorA = 10;
let valorB = 10;

if (valorA === valorB) {
    console.log("Os valores são IGUAIS.");
} else {
    console.log("Os valores são DIFERENTES.");
}

// Operadores lógicos:
let numero = 30;

// Verificar se um número é maior que 10 E menor que 50 (&&)
let condicao1 = (numero > 10 && numero < 50);
console.log(`O número ${numero} é maior que 10 e menor que 50?`, condicao1);

// Verificar se um número é menor que 5 OU maior que 20 (||)
let condicao2 = (numero < 5 || numero > 20);
console.log(`O número ${numero} é menor que 5 ou maior que 20?`, condicao2);