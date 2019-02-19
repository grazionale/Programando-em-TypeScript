//Forma de criar uma função de uma maneira mais legível 
const precos = [10, 23, 19];

//Forma tradicional
const precosEmReais_forma_tradicional = precos.map(function(preco) {
    return 'R$ ' + preco + ',00';
});

//Com ArrowFunctions
// Forma completa
const precosEmReais_forma_arrowFunctions_completa = precos.map((preco) => {
    return 'R$ ' + preco + ',00'; 
});
//Forma resumida quando só tem uma linha
const precosEmReais_forma_arrowFunctions_resumida = precos.map(preco => 'R$ ' + preco + ',00');

console.log('Forma Tradicional');
console.log(precosEmReais_forma_tradicional);

console.log('Forma Arrow Funcstion Completa');
console.log(precosEmReais_forma_arrowFunctions_completa);

console.log('Forma Arrow Functions Resumida');
console.log(precosEmReais_forma_arrowFunctions_resumida);

const acimaDeVinte = precos
    .filter(preco => preco > 20) //Filtrou
    .map(preco => `R$ ${preco},00`);//Fez um map no resultado da filtragem e ainda usa template strings passando o preco => preco

console.log('Preços acima de 20');
console.log(acimaDeVinte);

