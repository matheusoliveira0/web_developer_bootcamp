let input = prompt("what would you like to do?");
const todos = ["study", "watch a movie", "draw"];
while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("***********");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("***********");
  } else if (input === "new") {
    const newTodos = prompt("Ok, what is the new todo?");
    todos.push(newTodos);
    console.log(`${newTodos} added to the list`);
  } else if (input === "delete") {
    const index = parseInt(prompt("Ok, enter an index to delete"));
    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1);
      console.log(`Ok, deleted ${deleted[0]}`);
    } else {
      console.log("Unknow index");
    }
  }
  input = prompt("what would you like to do?");
}
console.log("You quit the app");
