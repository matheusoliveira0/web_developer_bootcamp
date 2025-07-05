// var usados na aulas

const nums = [57, 23, 89, 14, 76, 3, 45, 68, 90, 12];

//default params

function rollDie(
  numSides = 6
) /*caso usuario nao insira um numero 6 sera o seleciondo */ {
  return Math.floor(Math.random() * numSides) + 1;
}

function greet(person, msg = "Hay", punc = "!") {
  console.log(`${msg}, ${person}${punc}`);
}

console.log("*****************************");

//Spread in funtions call

console.log();
console.log(Math.max(57, 23, 89, 14, 76, 3, 45, 68, 90, 12));
console.log(Math.min(57, 23, 89, 14, 76, 3, 45, 68, 90, 12));

console.log(Math.max(nums)); //n funciona sem o spread

console.log(Math.max(...nums));
console.log(...nums);

console.log("Hello");
console.log(..."Hello");

console.log("*****************************");

//spread with array literals

const cats = ["Num", "Miu", "Sof"];

const dogs = ["si", "rex", "mm"];

const allPets = [...cats, ...dogs];

console.log(allPets);

allPets.push("adada");
console.log(allPets);

const hello = ["Hello"];

console.log(hello);

const newHello = [..."hello"];

console.log(newHello);

console.log("*****************************");

//spread with objects

const feline = { legs: 4, family: "Felidae" };
const canine = { isFury: true, family: "Canidae" };

const catDog = { ...feline, ...canine };
//ambos possuem family entao o ultimo spread ganha

console.log("*****************************");

//Rest params

function raceResults(gold, silver, ...everyoneElse) {
  console.log(`GOLD MEDAL GOES TO: ${gold}`);
  console.log(`SILVER MEDAL GOES TO: ${silver}`);
  console.log(`AND THANKS EVERYONE ELSE: ${everyoneElse}`);
}

raceResults("Tine", "Thomas", "Timothe", "Tom", "Teressa", "TinkerBell");

console.log("*****************************");

// Destructuring

const scores = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const [gold, silver, bronze, ...everyoneElse] = scores;

console.log(everyoneElse);

console.log("*****************************");

//destruturin objects

const user = {
  nome: "Math",
  sobrenome: "Oliv",
  email: "math.oliv@example.com",
  nascimento: "2001-11-10",
  bio: "Amante de tecnologia e viagens ao redor do mundo.",
  cidade: "Melbourne",
  estado: "Victoria",
};

const { email, nome, sobrenome, cidade } = user;

console.log(email);
console.log(nome);
console.log(sobrenome);

//renomeando usando destruturin

const { nascimento: dataDeNascimento } = user;

console.log(dataDeNascimento);

console.log("*****************************");

//destruturin params
const person = {
  firstName: "Olivia",
  lastName: "Rose",
};
function fullName({ firstName, lastName = "Doe" }) {
  return `${firstName} ${lastName}`;
}

console.log(fullName(person));
