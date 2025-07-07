//what is JSON
const data = `{"count":1302,"next":"https://pokeapi.co/api/v2/pokemon?offset=20&limit=20","previous":null,"results":[{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"},{"name":"ivysaur","url":"https://pokeapi.co/api/v2/pokemon/2/"},{"name":"venusaur","url":"https://pokeapi.co/api/v2/pokemon/3/"},{"name":"charmander","url":"https://pokeapi.co/api/v2/pokemon/4/"},{"name":"charmeleon","url":"https://pokeapi.co/api/v2/pokemon/5/"},{"name":"charizard","url":"https://pokeapi.co/api/v2/pokemon/6/"},{"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon/7/"},{"name":"wartortle","url":"https://pokeapi.co/api/v2/pokemon/8/"},{"name":"blastoise","url":"https://pokeapi.co/api/v2/pokemon/9/"},{"name":"caterpie","url":"https://pokeapi.co/api/v2/pokemon/10/"},{"name":"metapod","url":"https://pokeapi.co/api/v2/pokemon/11/"},{"name":"butterfree","url":"https://pokeapi.co/api/v2/pokemon/12/"},{"name":"weedle","url":"https://pokeapi.co/api/v2/pokemon/13/"},{"name":"kakuna","url":"https://pokeapi.co/api/v2/pokemon/14/"},{"name":"beedrill","url":"https://pokeapi.co/api/v2/pokemon/15/"},{"name":"pidgey","url":"https://pokeapi.co/api/v2/pokemon/16/"},{"name":"pidgeotto","url":"https://pokeapi.co/api/v2/pokemon/17/"},{"name":"pidgeot","url":"https://pokeapi.co/api/v2/pokemon/18/"},{"name":"rattata","url":"https://pokeapi.co/api/v2/pokemon/19/"},{"name":"raticate","url":"https://pokeapi.co/api/v2/pokemon/20/"}]}`;

//Using the Fetch API
/*

fetch("https://swapi.tech/api/people/1/")
.then(res => {
    console.log("Resolved!", res);
    return res.json();
})
.then((data) => {
    console.log(data);
    return fetch("https://swapi.tech/api/people/2/")
})
.then((res) => {
    console.log("Second resquest done!!");
    return res.json()
})
.then((data) => {
    console.log(data)
})
.catch(e => {
    console.log("Error!", e);
});

*/

const loadStarWarsPeople = async (n) => {
  try {
    const res = await fetch(`https://swapi.tech/api/people/${n}/`);
    const data = await res.json();
    console.log(data.result.properties.name);
  } catch (e) {
    console.log("error", e);
  }
};

loadStarWarsPeople(1);

// introducing Axios

const getStarWarsPerson = async () => {
  try {
    const res = await axios.get("https://swapi.tech/api/people/2/");
    console.log(res.data.result.properties.name);
  } catch (e) {
    console.log("Error >:(  ", e);
  }
};

getStarWarsPerson();
