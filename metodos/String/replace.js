const texto = "O JS é uma linguagem de programação popular e poderosa.";

const novoTexto2 = texto.replace("JS", "Python");

console.log(novoTexto2);

// ---------------------------------- // 

const cpf = "123.456.789-00"; 
const novoCpf = cpf.replace(/\./g, "").replace("-", "");
// const novoCpf = cpf.replaceAll("-" , "")
console.log(novoCpf);  

// cd metodo
// cd String
// node replace.js