// creating objs

const person = {
  firstName: "Joe",
  lastName: "Doe",
};

console.log(person);

const kitchenSink = {
  favNum: 9,
  isFunny: "true",
  colors: ["red", "orange"],
};

console.log(kitchenSink);

// accessing data out of objects

console.log(person.lastName);

//modifying objs

const midterms = { danielle: 96, thomas: 78 };

midterms.thomas = "C+"; //alterando propriedades do object

midterms.ezra = "B+"; //inserindo propriedades

midterms.tony = "A-";

//Nesting Arrays &  Objects

const comments = [
  { username: "Tammy", text: "lolollolo", votes: 9 },
  { username: "Lali", text: "xoxoxoxoxo", votes: 90 },
  { username: "Jim", text: "hiohohohoho", votes: 5 },
];
