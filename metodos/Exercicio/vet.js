const pets = []

function adicionarPet(nome, especie) {
  const pet = {nome, especie}
  pets.push(pet)
  console.log("Novo pet foi adicionado:")
  // console.log(pet);
  
}

function exibirPets() {
  console.log("lista de pets:");
  pets.forEach((pet) => {
    console.log("nome:", pet.nome);
    console.log("especie:" , pet.especie);
    console.log("--------------------------------------------------------");
    
  })
  
}

adicionarPet("Pipoca", "Cachorro")
adicionarPet("Pudim", "Gato")

exibirPets()