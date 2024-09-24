const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

for (let usuario of usuarios) {
    if (usuario.pets.length > 0)  {
        if (usuario.pets.length > 1) {
            console.log(`${usuario.nome} possui ${usuario.pets.length} pets`)
        } else {
            console.log(`${usuario.nome} possui ${usuario.pets.length} pet`)
        }
    } else {
        console.log(`${usuario.nome} não possui pets`)
    }
}

for (let usuario of usuarios) {
    const mensagem = usuario.pets.length > 0
    ? `${usuario.nome} possui ${usuario.pets.length} ${usuario.pets.length > 1 ? 'pets' : 'pet'}`
    : `${usuario.nome} não possui pets`
    console.log(mensagem)
}

