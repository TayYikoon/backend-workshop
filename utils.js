import fs from 'fs'

export function readExistingTodos() {
  const existingTodos = fs.readFileSync("./todos.json", "utf-8");

  const formattedTodos = JSON.parse(existingTodos);

  return formattedTodos;
}

export function getSpecificTodo(id) {
  const existingTodos = readExistingTodos();
  const theTodoIwant = existingTodos.find((todo) => todo.id === id);

  return theTodoIwant;
}

export function saveTodos(todos) {
  fs.writeFileSync("todos.json", JSON.stringify(todos));
}