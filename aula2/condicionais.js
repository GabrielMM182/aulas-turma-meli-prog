// let x = 7
// let y = 10

// console.log(x + y)
// console.log(x < y);

// let idade = 17
// let cidadania = false 

// if (cidadania || idade >= 18 && idade < 70 ) {
//     console.log ("obrigado a votar")
// } else if (cidadania || (idade >= 16 && idade <18 || idade >= 70)) {
//     console.log("vc pode votar, mas não é obrigatorio");
// } else {
//     console.log("vc não pode votar")
// }

let nota1 = 7
let nota2 = 8
let nota3 = 9

let media = (nota1 + nota2 + nota3) / 3

// console.log(media);
 
switch (true) {
    case (media >= 7): 
        console.log("Aprovado")
        break;
    case (media >= 5):
        console.log("recuperacão")
        break;
    default:
        console.log("Reprovado")
        break;
    }

let resultado2 = media >= 7 ? "aprovado" : (media >= 5 ? "recuperação" : "reprovado");

console.log(resultado2);

FIRECODE 

// 0 
// SAIR DA APLICACAO 
// 1 
// CADASTRAR UM FILME
// 2
// LISTAR OS FILMES
// 3
// CALCULAR A MÉDIA DOS FILMES
// 4 
// FILTRAR OS FILMES NÃO VISTOS
// 5 
// EXCLUIR O ULTIMO FILME CADASTRADO

// OPCAO INVALIDA