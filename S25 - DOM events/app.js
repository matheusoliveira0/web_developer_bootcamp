const form = document.querySelector('form');

const product = document.querySelector('#product')
const qty = document.querySelector('#qty')
const list = document.querySelector('#list')

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const newLi = document.createElement('li')
    newLi.innerText = `${qty.value} ${product.value}`
    list.append(newLi)

})