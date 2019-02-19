class Funcionario {
    nome: string;
    salario: number;

    constructor(nome: string, salario: number){
        this.nome = nome;
        this.salario = salario;
    }

    //Colocando 7.5 como default caso não for passado por parâmetro
    pagarImposto(taxa: number = 7.5){
        console.log(`Pagando ${this.salario * taxa / 100} reais de imposto`);
    }

}

class Secretario extends Funcionario{

}

class Executivo extends Funcionario{
    pagarImposto(taxa: number = 27.5){
        console.log('Executivo paga mais!!');
        super.pagarImposto(taxa);
    }
}

let francini = new Secretario('Francini', 1450);
francini.pagarImposto();

let gabriel = new Executivo('Jorge', 3000);
gabriel.pagarImposto();
