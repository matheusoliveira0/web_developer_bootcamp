// getElementById

//class list

const h2 = document.querySelector("h2");

h2.getAttribute("class");

h2.setAttribute("class", "purple"); // isso substitui classes existentes

h2.classList.add("border"); // add class sem substituir classes existentes

h2.classList.remove("border");

//transversing parent/child/subling

const fisrtBold = document.querySelector("b");

console.log(fisrtBold);
console.log(fisrtBold.parentElement);
console.log(fisrtBold.parentElement.parentElement.parentElement);

const paragraph = fisrtBold.parentElement;

console.log(paragraph.children);
console.log(paragraph.children[1]);

// Append & AppendChild

const newImage = document.createElement("img");

newImage.src =
  "https://images.unsplash.com/photo-1589912593528-1106d19aa17e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RGFuZGVsaW9ufGVufDB8fDB8fHww";

document.body.appendChild(newImage); // add a img no body

newImage.classList.add("pictures");

const newH3 = document.createElement("h3");

newH3.innerText = "I am new";

document.body.appendChild(newH3);

const newButton = document.createElement("button");
newButton.innerText = "Hey";

function createNewButton() {
  let container = document.querySelector("#container");
  for (let i = 1; i <= 100; i++) {
    const newButton = document.createElement("button");
    newButton.innerText = "(°u°)";
    container.appendChild(newButton);
  }
}

createNewButton();

//remove

const img = document.querySelector("img");

img.remove();

const a = document.querySelectorAll("a"); //retona um nodelist
a.forEach((el) => el.remove()); //percorre cada item da lista
