if(2 % 3 == 0){
    console.log('é par');
} else {
    console.log('é impar');
}

function verificarSemaforo(){
if (semaforo.value == 'verde') {  //se
    console.log("Siga em frente");
} else if(semaforo.value == 'amarelo'){ //se nao, se
    console.log("Reduza a velocidade")
} else { //se nao
    console.log("Pare");
    
}
}

function gerarNome(){
    if(dia.value == "")
        alert("Informe o dia");
    return;
}

let nome = "";

if(dia.value >= 1 && dia.value <=8){
    nome = "Desenvolvedor(a)"
    console.log("nome: " ,nome);
    
} else if(dia.value >= 9 && dia.value <=18){
    nome = "programador(a)"
    console.log("nome: " ,nome);

} else if(dia.value >= 19 && dia.value <=26){
    nome = "Estagiario(a)"
    console.log("nome: " ,nome);
    
} else {
    nome = "Senior(a)"
    console.log("nome: " ,nome);
}