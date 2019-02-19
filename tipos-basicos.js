//boolean
var estaPago = true;
//number
var idade = 20;
var valor = 29.99;
//string
var empresa = 'Nighcode';
//tempalte strings
var nome = 'Gabriel';
console.log("Ol\u00E1, meu nome \u00E9 " + nome + " e tenho " + idade + " anos");
//arrays
var notas = [8, 6, 7, 9];
//tuplas
var alunos = ['Gabriel', 9.5, 'Curso de Magento'];
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
//Enum, é um novo tipo de dados, geralmente utilizado para valores que não mudam, ex: status, sexo, etc
var Cor;
(function (Cor) {
    Cor[Cor["Verde"] = 0] = "Verde";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Branco"] = 3] = "Branco";
})(Cor || (Cor = {}));
;
var corFundo = Cor.Verde;
//Any, qualquer coisa. Geralmente utilizada em biblioteca de terceiros que você não conhece os tipos; Migração de JS para TS; Array com vários tipos de dados
var algumValor = 4;
algumValor = true;
algumValor = "Qualquer coisa";
//void
function alerta() {
    //.. alert('Operação não permitida');
}
//null e undefined -> claro que não faz sentido usar dessa forma. Null e undefined são subtipos de outros tipos
var u = undefined;
var n = null;
