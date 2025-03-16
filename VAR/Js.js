// 1 - Declarando Variáveis
let nome = "SeuNome"; // Substitua "SeuNome" pelo seu nome real
console.log("Exercício 1:", nome);

// 2 - Alterando o Valor da Variável
let idade = 25; // Atribuindo um valor inicial
idade = 30; // Alterando o valor
console.log("Exercício 2:", idade);

// 3 - Usando const
const pi = 3.14;
console.log("Exercício 3:", pi);
// pi = 3.1415; // Isso geraria um erro, pois const não pode ser reatribuído

// 4 - Operador de Subtração
let a = 15;
let b = 5;
let resultado = a - b;
console.log("Exercício 4:", resultado);

// 5 - Variáveis e Escopo
function testeEscopo() {
    let x = 10;
    console.log("Dentro da função:", x);
}
testeEscopo();
// console.log("Fora da função:", x); // Isso geraria um erro, pois x está dentro do escopo da função
