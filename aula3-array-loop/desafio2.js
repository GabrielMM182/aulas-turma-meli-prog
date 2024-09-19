const prompt = require("prompt-sync")();


let continuar = true

while (continuar) {
  console.clear();

  console.log(`
    Escolha uma opção:
    0 - Sair
    1 - Cadastrar filme
    2 - Listar filmes
    3 - Calcular média
    4 - Filtrar por filmes não vistos
    5 - Excluir último filme cadastrado
    6 - Excluir filme específico
    `);
    const escolhaFeita = Number(prompt("Opção escolhida: "));


    if (escolhaFeita === 0) {
        console.log("saiu da aplicação");
        break;
    } else if (escolhaFeita === 1) {
        console.log("cadastrar filme");
    } else if (escolhaFeita === 2) {
        console.log("Listar filmes");
    } else if (escolhaFeita === 3) {
        console.log("Calcular média");
    } else if (escolhaFeita === 4) {
        console.log("Filtrar por filmes não vistos");
    } else if (escolhaFeita === 5) {
        console.log("Excluir último filme cadastrado");
    } else if (escolhaFeita === 6) {
        console.log("Excluir filme específico");
    } else {
        console.log("opção invalida");
    }
    prompt("Aperte enter para continuar...");

  }