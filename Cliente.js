var Cliente = /** @class */ (function () {
    //obs, não pode criar mais de um construtor igual em JAVA
    function Cliente(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Cliente.prototype.apresentar = function () {
        return "Ol\u00E1, eu sou " + this.nome + " e tenho " + this.idade + " anos";
    };
    return Cliente;
}());
var vlr = 29.90;
var cliente = new Cliente('Gabriel', 21);
var apresencao = cliente.apresentar();
console.log(apresencao);
var cliente2 = new Cliente('Francini', 25);
console.log(cliente2.apresentar());
