const numero1 = [1,2,3,4,5,6,7,8,9,10]

const numerosPares = numero1.filter((numero) => numero % 2 === 0)

console.log(numerosPares);


const tarefas = [
  { id: 1, tarefa: "Limpar o quarto", concluida: true },
  { id: 2, tarefa: "Fazer café", concluida: false },
  { id: 3, tarefa: "Estudar JavaScript", concluida: true }
]

const tarefaConcluida = tarefas.filter((tarefa) => tarefa.concluida === false)

console.log(tarefaConcluida);
