// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png



//Minha solução
/*
const container = document.querySelector("#container");

for (let i = 1; i <= 10; i++) {
  const pokemonCard = document.createElement('div');
  const span = document.createElement('span');
  pokemonCard.append('span')
  let pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  const newImage = document.createElement("img");
  newImage.src = pokemonImage;
  container.appendChild(newImage);
}
*/


// Colt solution 

  const container = document.querySelector("#container");
  const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

  for (let i =1; i <= 1025; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon')
    const label = document.createElement('span');
    label.innerText= `#${i}`

    const newImage = document.createElement('img')
    newImage.src = `${baseURL}${i}.png`
    pokemon.appendChild(newImage)
    pokemon.appendChild(label)
    container.appendChild(pokemon)
  }

