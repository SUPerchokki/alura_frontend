console.log("trabalhando com listas");

const listaDeDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`, `Curitiba`
);

listaDeDestinos.push(`Macapa`);

console.log("destinos possiveis: ")
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);

console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);