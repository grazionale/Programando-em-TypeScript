//inferencia ocorre quando um tipo é declarado automaticamente ao fazer uma atribuição na criação da variável ou num método já conhecido
var quantidade = 20;
// quantidade = 'qualquer'; -- não compila, pq é do tipo number devido a criação e inicialização da variável
var x = [1, 2, null];
//x[0] = true; -> não compila
//Contextual Typing
window.onmousedown = function (evento) {
    console.log(evento.button); //ok
};
