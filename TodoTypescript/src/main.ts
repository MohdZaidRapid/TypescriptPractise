import "./style.css";

interface Todo {
  title: string;
  isCompleted: boolean;
  readonly id: string;
}

const todos: Todo[] = [];

const todosContainer = document.querySelector(
  ".todosContainer"
) as HTMLDivElement;

const todoInput = document.getElementsByName("title")[0] as HTMLInputElement;

const myform = document.getElementById("myForm") as HTMLFormElement;

myform.onsubmit = (e) => {
  e.preventDefault();
  const todo: Todo = {
    title: todoInput.value,
    isCompleted: false,
    id: String(Math.random() * 1000),
  };
  todoInput.value = "";

  todos.push(todo);
  renderTodo(todos);
};

const generateTodoITem = (title: string, isCompleted: boolean, id: string) => {
  const todo: HTMLDivElement = document.createElement("div");
  todo.className = "todo";
  const checkBox: HTMLInputElement = document.createElement("input");

  checkBox.setAttribute("type", "checkbox");
  checkBox.className = "isCompleted";
  checkBox.checked = isCompleted;

  // creating p

  const paragraph: HTMLParagraphElement = document.createElement("p");

  // creating Delete button
  const btn:HTMLButtonElement=document.createElement("button")
  

};

const renderTodo = (todos: Todo[]) => {
  todos.forEach((item) => {
    generateTodoITem(item.title, item.isCompleted, item.id);
  });
};
