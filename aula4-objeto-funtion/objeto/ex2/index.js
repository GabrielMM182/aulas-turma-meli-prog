const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["pipoca", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

// for (const usuario of usuarios) {
//     const mensagem = usuario.pets.length > 0
//         ? `Sou ${usuario.nome} e tenho ${usuario.pets.length} ${usuario.pets.length > 1 ? 'pets' : 'pet'}` 
//         : `Sou ${usuario.nome} e não tenho pets`;
        
//         console.log(mensagem);
// }

for (const usuario of usuarios) {
    if (usuario.pets.length > 0)  {
        if(usuario.pets.length > 1) {
            console.log(`sou ${usuario.nome} e tenho ${usuario.pets.length} pets`);
        } else {
            console.log(`sou ${usuario.nome} e tenho ${usuario.pets.length} pet`);
        }
    } else {
        console.log(`sou ${usuario.nome} e não tenho pets`);
    }
}