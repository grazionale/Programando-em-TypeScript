//Define que a pessoa TEM QUE TER pelo menos um campo idade do tipo number
// function imprimirIdade(pessoa: { idade: number }){
//     console.log(pessoa.idade);
// }
//Outra forma de declarar essa obrigatoriedade seria criando de faot uma interface
function imprimirIdade(pessoa) {
    console.log(pessoa.nome);
    console.log(pessoa.sexo);
    console.log(pessoa.idade);
}
var gabrielGrazionale = { nome: 'Gabriel Grazionale', idade: 21, sexo: 'Masculino' };
imprimirIdade(gabrielGrazionale);
