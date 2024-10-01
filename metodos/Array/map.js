const numeros = [1,2,3,4,5,6,7,8,9,10,100,101]

const numerosAoQudrado = numeros.map((numero) => numero * numero) 

console.log(numerosAoQudrado);


const tarefas = [
  { id: 1, aFazer: "Limpar o quarto", concluida: true },
  { id: 2, aFazer: "Fazer café", concluida: false },
  { id: 3, aFazer: "Estudar JavaScript", concluida: true }
]


const tarefasConcluidas = tarefas.map((tarefa) => tarefa.id)

console.log(tarefasConcluidas);