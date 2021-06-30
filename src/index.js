import { somarImport, impostoRb } from './math.js';

class ListConvidados {
    constructor(){
        this.convidados = [];
    }

    adicionar(){
        var nome_input = document.getElementById("nome");
        var idade_input = document.getElementById("idade");
        var cpf_input = document.getElementById("cpf");
        this.convidados.push({
            nome:nome_input.value,
            idade:idade_input.value, 
            cpf:cpf_input.value
        });
    }

    listConvidados(){
        var listHtml = document.getElementById("lisagem");
        for (var c = 0; c < this.convidados.length; c++){
            var element = document.createElement("li");
            element.setAttribute('id', c);
            element.innerHTML =   this.convidados[c].nome;
            listHtml.appendChild(element);
        }
    }
}

class Calculadora {
    constructor(){
        this.total

    }

    somar(n){
        for (var c = 0; c < n.length; c++){
            this.total += n[c];
    }
    console.log(this.total);

}

    fatorial(n1){
        var tot = 0;
        for (var c=n1; c >= 1; c--){
            tot += n1 * n1-1;
        }
        console.log(tot);
    }
}

const calculator = new Calculadora();


var lista = [1,4,5,6,7];
calculator.somar(lista);
calculator.fatorial(5);


let objeto = {nome:'ives', idade:14, n1: 12, n2: 12, n4: 5};
const {nome, idade , ...outros} = objeto;
console.log(nome);
console.log(outros);

// let objeto2 = {produto:'limao', valor:14.99, cod:12322, peso:"2kg"};

// var { produto, ...rest } = objeto2;

// console.log(` O produto que voce comprou foi ${ produto }   custou ${ rest.valor }R$`);

// console.log(` função importada funcionando ${ somarImport() } e o imposto: ${ impostoRb } `);


// const myPromisse = () => {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             resolve("PRONTO");
//         }, 2000);
//     })
// }

// myPromisse().then((res)=>{
//     console.log('EXEC  1', res);
// })



// async function consultarDadosApi() {
//     var resposta = await myPromisse();
//     console.log('EXEC 2' ,resposta);
// }

// const otherPromise = async () => {
//     var valor = await myPromisse();
//     console.log("exec 3", valor);
// }

// consultarDadosApi();
// otherPromise();


class Convidado{
    constructor(){
        this.listaConvidados = [];
    }


    create(){
        let nome = prompt("Digite o do convidado.:");
        let idade = prompt("Digite a idade do convidado.:");
        let presente = confirm("Convidado vai levar presente OK para sim cancel para nao")

        var convidado = { nome, idade, presente };

        this.listaConvidados.push(convidado);

        console.log(this.listaConvidados);
    }
    listar(){
        let lista = document.getElementById("listagem");
        for (var c = 0; c < this.listaConvidados.length; c++){
            var {nome, ...rest} = this.listaConvidados[c];
            let element = document.createElement("li");
            element.innerHTML = nome;
            lista.appendChild(element);
        }
    }
}

const c = new Convidado();




var lista = [];

const adicionar = () => {
    let nome = prompt("Digite o do convidado.:");
    let idade = prompt("Digite a idade do convidado.:");
    let presente = confirm("Convidado vai levar presente OK para sim cancel para nao")


    var convidado = { nome, idade, presente };

    lista.push(convidado);
}

const remove = (id) => {
    var index = lista.indexOf(id);
    if ( index > -1){
        lista.splice(index, 1);
    }   
}

const sumMult = (number) => {
    var total = 0;
    for (var c = 0; c < number; c++){
        if( c % number == 0){
            total = total + c
        }
    }
    return total;
}   


console.log(sumMult(1));
