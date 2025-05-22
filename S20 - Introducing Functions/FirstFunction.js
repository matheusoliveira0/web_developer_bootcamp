//function são um bloco de código que executa uma tarefa específica. Ela é escrita uma vez e pode ser quantas vezes necessario sem a necessidade de reescrevar o código

function singSong() {
    console.log("Do");
    console.log("Re");
    console.log("Mi");
}

singSong()
singSong()


//arguments :Objeto especial que existe dentro de funções tradicionais, permitindo acessar todos os argumentos passados.

//argument: Todo valor que você passa para uma função ou método. Ex.: soma(1,2,3) → 1, 2, 3 são argumentos.

function somaTudo(/*os argumentos vao aqui*/){
    let total = 0;
    for (let i=0;i<arguments.length;i++){
        total += arguments[i];
    }
    return total
}

console.log(somaTudo(1,2,3))

//arguments que ja vi

let num = [1,2,3];

console.log(num)

num.push(4)//4 é o argument

console.log(num)

let hello = 'Hello'

console.log(hello.indexOf('e'))

//parâmetros :Parâmetros: variáveis declaradas na definição de uma função, que recebem valores (argumentos) quando a função é chamada.

//Variáveis criadas como parâmetros só existem dentro da função (escopo local).

function greet(name/*parametro */ ){
    console.log(`Hi ${name}`)
}

greet('Math'/*argumento */ );
console.log(name)//Erro: a variável name não existe fora da função greet 

function soma(a,b){
    return a+b
}

console.log(soma(3,3))


//multiplos arguments 

function greet2(firstName,lastName){
    console.log(`Hi ${firstName} ${lastName[0]}.`)
}

greet2('Math',"Oliveira")


function repeat(msg,numTimes){
    let result = ''
    for(let i =0;i<numTimes;i++){
        result+= msg
    }
    console.log(result)
}

//Return keyword

function add(x,y){
    console.log('lol')
    return x+y
    console.log('lol2')//não sera executado pq return finaliza a funçao 
}

function add2(x,y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        return false;
    }
    return x+y
}

console.log(add(add(add(1,0),1),1)~ç)