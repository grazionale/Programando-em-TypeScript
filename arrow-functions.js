//Forma de criar uma função de uma maneira mais legível 
var precos = [10, 23, 19];
//Forma tradicional
var precosEmReais_forma_tradicional = precos.map(function (preco) {
    return 'R$ ' + preco + ',00';
});
//Com ArrowFunctions
// Forma completa
var precosEmReais_forma_arrowFunctions_completa = precos.map(function (preco) {
    return 'R$ ' + preco + ',00';
});
//Forma resumida quando só tem uma linha
var precosEmReais_forma_arrowFunctions_resumida = precos.map(function (preco) { return 'R$ ' + preco + ',00'; });
console.log('Forma Tradicional');
console.log(precosEmReais_forma_tradicional);
console.log('Forma Arrow Funcstion Completa');
console.log(precosEmReais_forma_arrowFunctions_completa);
console.log('Forma Arrow Functions Resumida');
console.log(precosEmReais_forma_arrowFunctions_resumida);
var acimaDeVinte = precos
    .filter(function (preco) { return preco > 20; }) //Filtrou
    .map(function (preco) { return "R$ " + preco + ",00"; }); //Fez um map no resultado da filtragem e ainda usa template strings passando o preco => preco
console.log('Preços acima de 20');
console.log(acimaDeVinte);
