//var , let e const

//var -> variável normal, pode ser executada em qualquer lugar do código
//let -> variável que só pode ser executada em seu contexto (escopo)
//const -> variável consatnte que não troca de valor NUNCA, funciona como o let, exclusiva de seu escopo
function iniciarTime(iniciarJogo: boolean){
    var time1: string = 'Santos';
    var time2: string = 'São Paulo';
    let cidade: string = "";
    if(iniciarJogo){
        cidade = 'Em Londrina';
    }
    console.log(`${time1} e ${time2} vão jogar em ${cidade}`);
}

iniciarTime(true);