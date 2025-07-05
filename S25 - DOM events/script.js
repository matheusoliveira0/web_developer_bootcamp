// variaveis 
const btn = document.querySelector('#v2')

const btn3 = document.querySelector('#v3')
const btn4 = document.querySelector('#v4')

const h1 = document.querySelector('h1')

//Onclick property

btn.onclick = function()  {
    console.log('you clicked me ')
    console.log('123456 ')
}

function scream() {
    console.log("aaaaahhhhh");
    console.log("stop ")
}

btn.onmouseenter = scream;

h1.onclick = () => {
    alert('U clicked the title')
}


// addEventListener

btn3.addEventListener('dblclick', ()=> {
    alert('clicked')
})
btn3.addEventListener('mousedown', ()=> {
    alert('mpuse up')
})



const btn1 = document.querySelector('#hello');
const btn2 = document.querySelector('#goodbye');

btn1.addEventListener('click', ()=>{
    console.log('hello')
})

btn2.addEventListener('click', ()=>{
    console.log('goodbye')
})

//events and keyword this

//Keybord events & event objects
/*

const input = document.querySelector('input')

input.addEventListener('keydown', function(e){
    console.log(e.key)
    console.log(e.code)
})

// input.addEventListener('keyup', function(){
//     console.log('keyup')
// })

*/

//Input and change events 
/*
const input = document.querySelector('input')

input.addEventListener('input', function (e) {
    input.style.color='white'
    h1.innerText = input.value
    console.log('inputo')
})

*/
// exerfcicio do capitulo 
/*
const input = document.querySelector('input');

input.addEventListener('input', (e) =>{
    h1.innerText = `Welcome, ${input.value}`
})
*/


//Event Delegation