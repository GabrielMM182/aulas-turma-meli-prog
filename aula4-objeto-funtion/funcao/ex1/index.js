const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "x",
            correta: "b"
        },
        {
            resposta: "v",
            correta: "c"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "n",
            correta: "b"
        },
        {
            resposta: "f",
            correta: "c"
        }
    ]
}

const corrigirProva = (prova) => {
    let questoesCorretas = 0

    for (const questao of prova.questoes) {
        if (questao.resposta === questao.correta) {
            questoesCorretas++
        }
        
    }

    let valorPorQuestao = prova.valor / prova.questoes.length

    let notaDaprova = valorPorQuestao * questoesCorretas;

    if (questoesCorretas === 0) {
        console.log(`${prova.aluno} não acertou nenhuma questão da prova`);
    } else if (questoesCorretas === 1) {
        console.log(`${prova.aluno} acertou 1 questão da prov e obteve a nota ${notaDaprova}`);
    } else {
        console.log(`${prova.aluno}  acertou ${questoesCorretas}  questão da prova e obteve a nota ${notaDaprova}`);
    }
}

corrigirProva(prova)