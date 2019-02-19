//boolean
let estaPago: boolean = true;

//number
let idade: number = 20;
let valor: number = 29.99;

//string
let empresa: string = 'Nighcode';

//tempalte strings
let nome: string = 'Gabriel';
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos`);

//arrays
let notas: number[] = [8, 6, 7, 9];

//tuplas
let alunos: [string, number, string] = ['Gabriel', 9.5, 'Curso de Magento'];
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

//Enum, é um novo tipo de dados, geralmente utilizado para valores que não mudam, ex: status, sexo, etc
enum Cor {Verde, Amarelo, Azul, Branco};
let corFundo: Cor = Cor.Verde;

//Any, qualquer coisa. Geralmente utilizada em biblioteca de terceiros que você não conhece os tipos; Migração de JS para TS; Array com vários tipos de dados
let algumValor: any = 4;
algumValor = true;
algumValor = "Qualquer coisa";

//void
function alerta(): void{
    //.. alert('Operação não permitida');
}

//null e undefined -> claro que não faz sentido usar dessa forma. Null e undefined são subtipos de outros tipos
let u: undefined = undefined;
let n: null = null;
