const prompt = require("prompt-sync")();

const filmes = [
  {
    nome: "Batman",
    notaImdb: 9,
    notaRottenTomatos: 8.9,
    assitido: "s",
  },
  {
    nome: "Naruto",
    notaImdb: 7,
    notaRottenTomatos: 5,
    assitido: "n",
  },
  {
    nome: "Uma Mente Brilhante",
    notaImdb: 9.5,
    notaRottenTomatos: 10,
    assitido: "n",
  },
];

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
    break;
  } else if (escolhaFeita === 1) {
    const nomeDigitado = prompt("Digite o nome do filme: ");
    const notaImdbDigitada = Number(prompt("Digite a nota do IMDb: "));
    const notaRottenTomatosDigitada = Number(
      prompt("Digite a nota do Rotten Tomatos: ")
    );
    const assistidoDigitado = prompt("Você assistiu o filme? s ou n? ");

    if (assistidoDigitado !== "s" && assistidoDigitado !== "n") {
      console.log("Escolha inválida!");
      continue;
    }

    const novoFilme = {
      nome: nomeDigitado,
      notaImdb: notaImdbDigitada,
      notaRottenTomatos: notaRottenTomatosDigitada,
      assitido: assistidoDigitado,
    };

    filmes.push(novoFilme);
  } else if (escolhaFeita === 2) {
    console.table(filmes);
  } else if (escolhaFeita === 3) {
    const nomeFilmeProcurado = prompt("Qual o nome do filme desejado? ");

    for (let item of filmes) {
      if (item.nome === nomeFilmeProcurado) {
        const soma = item.notaImdb + item.notaRottenTomatos;
        const media = soma / 2;
        console.log("A média é: " + media);
        break;
      }
    }
  } else if (escolhaFeita === 4) {
    for (let item of filmes) {
      if (item.assitido === "n") {
        console.log(item);
      }
    }
  } else if (escolhaFeita === 5) {
    if (filmes.length > 0) {
      filmes.pop();
      console.log("Último filme cadastrado excluído.");
    } else {
      console.log("Não há filmes para excluir.");
    }
  } else if (escolhaFeita === 6) {
    const nomeFilmeExcluir = prompt(
      "Digite o nome do filme que deseja excluir: "
    );

    const indiceFilme = filmes.findIndex(
      (filme) => filme.nome.toLowerCase() === nomeFilmeExcluir
    ); // permite excluir mesmo se digitar com letra minuscula

    if (indiceFilme !== -1) {
      filmes.splice(indiceFilme, 1);
      console.log(`Filme '${nomeFilmeExcluir}' excluído da lista.`);
    } else {
      console.log("Filme não encontrado.");
    }
  } else {
    console.log("Escolha inválida");
  }

  prompt("Aperte enter para continuar...");
}
