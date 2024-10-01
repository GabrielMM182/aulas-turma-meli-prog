const filmes = [
  {
    nome: "Batman",
    notaImdb: 9,
    notaRottenTomatos: 8.9,
    assitido: "s"
  },
  {
    nome: "Naruto",
    notaImdb: 7,
    notaRottenTomatos: 5,
    assitido: "n"
  },
  {
    nome: "Uma Mente Brilhante",
    notaImdb: 9.5,
    notaRottenTomatos: 10,
    assitido: "n"
  }
]

const listaFilmesAssistidos = []
const listaFilmesNaoAssistidos = []

for (let item of filmes) {
  if (item.assitido === "n") {
    listaFilmesNaoAssistidos.push(item)
  } else {
    listaFilmesAssistidos.push(item)
  }
}

console.table(listaFilmesAssistidos)
console.table(listaFilmesNaoAssistidos)


