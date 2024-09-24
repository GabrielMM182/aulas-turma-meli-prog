const usuario = {
    nome: "gabriel",
    idade: 25,
    profissao: "programador",
    cor_preferida: "roxo",
}

const {nome, idade, profissao, cor_preferida} = usuario

const mensagem = `Olá... Eu sou ${usuario.nome} e tenho ${usuario.idade} anos de idade. Sou ${usuario.profissao} e minha cor preferida é ${usuario.cor_preferida}!`

console.log(mensagem)