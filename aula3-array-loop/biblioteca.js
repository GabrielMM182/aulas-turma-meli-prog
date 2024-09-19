const prompt = require('prompt-sync')();

let nome = prompt('Qual é o seu nome? ');
console.log('Olá, ' + nome + '!');

let idade = parseInt(prompt('Qual é a sua idade? '));
if (idade >= 18) {
  console.log('Você é maior de idade.');
} else {
  console.log('Você é menor de idade.');
}
