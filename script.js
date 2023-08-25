function calculadora(){
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - subtração (-)\n  3 - multiplicação (*)\n 4 - divisãoReal (/)\n 5- DivisãoInteira(%)\n 6 - Potenciação (**)\n'));

let n1=Number(prompt('Insira o primeiro valor:'));
let n2=Number(prompt('Insira um segundo valor:'));
let resultado;

// definir funções
function soma() {
    resultado = n1 + n2;
// mostrando o resultado usando template strings
    alert(`${n1} + ${n2} = ${resultado}`);  
}
function subtração(){
    resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`); 
}
function multiplicação(){
    resultado = n1 * n2;
    alert(`${n1} - ${n2} = ${resultado}`);
}

function divisãoReal(){
    resultado = n1 / n2;
    alert(`${n1} / ${n2} = ${resultado}`);  
}

if (operacao == 1){
    soma();
} else if (operacao ==2){
    subtração();
} else if (operacao == 3){
    multiplicação();
} else if ( operacao == 4){
    divisãoReal();
} else if (operacao == 5){
    divisãoInteira();
}
else if (operacao == 6){
    potenciação();
}
}
calculadora();



