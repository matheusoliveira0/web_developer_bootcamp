//scope

const creature = "Common Sea Dragon"; //variavel global

function scubaDive() {
  const creature = "Spanish Dancer"; //variavel local so existe dentro da função em que foi declarada
  console.log(creature);
}

scubaDive();
console.log(creature);

//block scope

let radius = 8;
if (radius < 8) {
  const PI = 3.14;
  let msg = "Hiiii"; //essa variavel so existe dentro co bloco em q foi declarada
}

console.log(radius);
//console.log(msg); //varivel não existe fora do bloco

//em contrapartidada se usarmos var funciona fora do bloco em que foi declarada

for (var i = 0; i < 5; i++) {
  var pizzaSlice = 7;
  var msg2 = "Qro pizaaaa!";
}
console.log(pizzaSlice);
console.log(i);
console.log(msg2); //varivel existe fora do bloco

//Lexical Scope

// Se uma função está dentro de outra, ela pode acessar as variáveis da função de fora.

// Mas uma função não pode acessar variáveis de uma função que está dentro dela.

//ex:

function bankRobbery() {
  const heroes = ['Batman','Superman','Wonder-Woman'];  // variável no escopo de bankRobbery

  function cryForHelp() {
    const sideKicks =  ['Robin','Super-Boy','Wonder-Girl']; // variável no escopo de cryForHelp

    for(let hero of heroes){  // cryForHelp CONSEGUE acessar heroes!
        console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
    }
  }

  cryForHelp();  // precisamos executar a função para que o código dela rode

  //console.log(sideKicks);  // ERRO! Não consegue acessar sideKicks, está fora do escopo
}

bankRobbery();


//functions expressions

// É quando você cria uma função e atribui ela a uma variável.
// Ou seja:
// A função não tem nome próprio (ou pode ter, mas não precisa).
// É guardada dentro de uma variável ou constante.

function add(x,y){
    return x+y
}

console.log(add(5,5))

let mult = function (x,y) {
    return x*y
} 

let squares = function(x) {
    return Math.pow(x,2)
}

//Higher order functions 

// É uma função que faz uma ou duas coisas:

// Recebe uma ou mais funções como argumento.

// Retorna uma função como resultado.

// Ou seja:
// Uma função que trabalha com outras funções.

function callTwice(func){
    func();
    func();
}

function callTenTimes(f) {
    for(let i=0;i<=10;i++){
        f()
    }
}

function rollDie(){
    const roll = Math.floor(Math.random() * 6) + 1

    console.log(roll)

}

callTwice(rollDie)


callTenTimes(rollDie)

console.log('********************************');

//Returning functions

let square = {
    area(x) {
          return x*x  
    },
    perimeter(x) {
        return x*4
    }
    
}

//this method
console.log('********************************');
let hen = {
    name: 'Helen',
    eggCount:0,
    layAnEgg: function() {
         this.eggCount+=1;

         return 'EGG'
    }
}

