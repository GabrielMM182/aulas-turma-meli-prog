const tarefas = [
  { id: 1, aFazer: "Limpar o quarto", concluida: 10 },
  { id: 2, aFazer: "Fazer café", concluida: 20 },
  { id: 3, aFazer: "Estudar JavaScript", concluida: 30 }
]


const precoTotal = tarefas.reduce((acumulador, produto) => acumulador + produto.concluida, 10)

console.log(precoTotal);