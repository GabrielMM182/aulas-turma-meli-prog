const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
}

const prova2 = {
    aluno: "gabriel",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "c"
        },
        {
            resposta: "c",
            correta: "d"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "e"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
}

const corrigirProva = (prova2) => {
    let questoesCorretas = 0

    for (const questao of prova2.questoes) {
        if (questao.resposta === questao.correta) {
            questoesCorretas++
        }
    }

    let valorPorQuestao = prova2.valor / prova2.questoes.length

    let notaDaProva = valorPorQuestao * questoesCorretas

    if (questoesCorretas === 0) {
        console.log(`${prova2.aluno} não acertou nenhuma questão`); 
    } else if (questoesCorretas === 1) {
        console.log(`${prova2.aluno} acertou 1 questão na prova e obteve a seguinte nota ${notaDaProva}`)
    } else {
        console.log(`${prova2.aluno} acertou ${questoesCorretas} questões na prova e obteve a seguinte nota ${notaDaProva}`)
    }

}

corrigirProva(prova2)