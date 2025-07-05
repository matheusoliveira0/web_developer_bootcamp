// variaveis usadas na aula
const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const movies = [
  {
    title: "The Godfather",
    score: 98,
    year: 1972,
  },
  {
    title: "The Dark Knight",
    score: 97,
    year: 2008,
  },
  {
    title: "Interstellar",
    score: 85,
    year: 2014,
  },
  {
    title: "The Matrix",
    score: 78,
    year: 1999,
  },
  {
    title: "Hunger Games",
    score: 67,
    year: 2012,
  },
  {
    title: "Pacific Rim",
    score: 60,
    year: 2013,
  },
  {
    title: "Transformers: Revenge of the Fallen",
    score: 45,
    year: 2009,
  },
  {
    title: "Cats",
    score: 20,
    year: 2019,
  },
  {
    title: "The Room",
    score: 25,
    year: 2003,
  },
  {
    title: "Movie 43",
    score: 15,
    year: 2013,
  },
];

const prices = [9.99, 1.5, 19.99, 49.99, 30.5, 0.5];

const numeros = [1, 2, 3, 4, 5, 6];

/*----------------------------------------------*/

//foreach

numbers.forEach(function (el) {
  if (el % 2 === 0) {
    console.log(el);
  }
});

movies.forEach(function (movie) {
  console.log(`Title: ${movie.title} score: ${movie.score}`);
});

/*----------------------------------------------*/

//Map

const doubles = numbers.map(function (num) {
  return num * 2;
});

const movieTitles = movies.map(function (movie) {
  return movie.title;
});

/*----------------------------------------------*/

//Arrow functions

const add = (x, y) => {
  return x + y;
};

const square = (x) => {
  return x * x;
};

const rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const rollDie2 = () => Math.floor(Math.random() * 6) + 1;

const mult = (a, b) => a * b;

const newMovies = movies.map((movie) => `${movie.title} - ${movie.score / 10}`);

/*----------------------------------------------*/

// setTimeout

console.log("olá");
setTimeout(() => {
  console.log("ainda está ai ?");
}, 5000);

//setInterval
/*
const id = setInterval(()=> {
    console.log(Math.floor(Math.random()*10))
},2000)
*/

/*----------------------------------------------*/

//Filter method

const goodMovies = movies.filter((m) => m.score > 80);
const goodTitles = movies.filter((m) => m.score > 80).map((m) => m.title);

const badMovies = movies.filter((m) => m.score < 50);

const recentMovies = movies.filter((m) => m.year > 2010);

/*----------------------------------------------*/

// every and some

//every() → checa se todos atendem a condição

function allEvens(arr) {
  if (arr.every((e) => e % 2 === 0)) {
    return true;
  } else {
    return false;
  }
}

allEvens([2, 4, 6]);

/*----------------------------------------------*/

const palavras = ["Abacaxi", "banana", "Carambola", "uva"];
const palavras2 = ["Abacaxi", "banana", "Carambola", "uva", "Pessego"];

function allStringsHaveA(arr) {
  return arr.every((a) => a.toLowerCase().includes("a"));
}

/*----------------------------------------------*/

// some() → checa se algum item atende a condição

function thereIsaImpostor(arr) {
  return arr.some((a) => a < 0);
}

thereIsaImpostor([]);

//Reduce

/*  é um método que reduz um array a um único valor.

sintaxe basica:

array.reduce((acumulador, elementoAtual) => {
  // lógica
  return acumuladorAtualizado;
}, valorInicial);

acumulador → vai guardando o resultado parcial a cada iteração.

elementoAtual → é o elemento que está sendo processado no momento.

valorInicial → é opcional, mas sempre recomendável colocar!

*/

const total = prices.reduce((total, price) => {
  return total + price;
});

const minPrice = prices.reduce((min, price) => {
  if (price < min) {
    return price;
  }
  return min;
});

const maxPrice = prices.reduce((max, price) => {
  if (price > max) {
    return price;
  }
  return max;
});

const somaNumerosPares = numeros
  .filter((n) => n % 2 === 0)
  .reduce((total, num) => total + num, 0);

//console.log(somaNumerosPares);
