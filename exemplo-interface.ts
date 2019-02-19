//Define que a pessoa TEM QUE TER pelo menos um campo idade do tipo number
// function imprimirIdade(pessoa: { idade: number }){
//     console.log(pessoa.idade);
// }
//Outra forma de declarar essa obrigatoriedade seria criando de faot uma interface

interface Pessoa{
    idade: number;
    nome?: string; //Se tiver '?' no nome do atributo, torna ele não obrigatório
    sexo: string;
}

function imprimirIdade(pessoa: Pessoa){ //Pessoa é uma inteface, então é obrigatório passar a idade 
    console.log(pessoa.nome);
    console.log(pessoa.sexo);
    console.log(pessoa.idade);
}

let gabrielGrazionale = {nome: 'Gabriel Grazionale', idade: 21, sexo: 'Masculino'};

imprimirIdade(gabrielGrazionale);