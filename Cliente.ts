class Cliente {
    nome: string;
    idade: number;

    //obs, não pode criar mais de um construtor igual em JAVA
    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(){
        return `Olá, eu sou ${this.nome} e tenho ${this.idade} anos`;
    }
}
let vlr: number = 29.90;
let cliente: Cliente = new Cliente('Gabriel', 21);
let apresencao: string = cliente.apresentar();

console.log(apresencao);


let cliente2: Cliente = new Cliente('Francini', 25);
console.log(cliente2.apresentar());