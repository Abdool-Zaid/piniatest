<script setup>
import { onMounted } from "vue";
let style=()=>{
  document.querySelectorAll(".true").forEach((todo) => {
        todo.style = `
  text-decoration: line-through;
  `;
      });
}
let todos = [{ name: "NewToDO.value", completed: false, index: 1 }];
let renderArray = () => {
  displayTodos.innerHTML = "";
  todos.forEach((todo) => {
    displayTodos.innerHTML += `
  <li>
    <p class="${todo.completed}">${todo.name}</p>
    <button id="${todo.index}" class="completeMe" >done</button>
    <button id="${todo.index}" class="deleteMe" >delete</button></li>
    `;
  });
  style()
  document.querySelectorAll(".deleteMe").forEach((todo) => {
    todo.addEventListener("click", () => {
      let id = todo.id;
      todos = todos.filter((todo) => {
        if (todo.index != id) {
          return todo;
        }
      });
      renderArray();
    });
  });
  document.querySelectorAll(".completeMe").forEach((todo) => {
    todo.addEventListener("click", () => {
      let id = todo.id;
      let index = todos.findIndex((todo) => todo.index == id);
      todos[index].completed = !todos[index].completed;
      console.table(todos);
      renderArray();
      
    });
  });
};
onMounted(() => {
  renderArray();
});
let addNewToDo = () => {
  if (NewToDO.value) {
    todos.push({ name: NewToDO.value, completed: false, index: Date.now() });
    console.table(todos);
    NewToDO.value = "";
    renderArray();
  }
};
let deleteToDO = (id) => {};
</script>

<template>
  <h1>todo</h1>
  <form type="submit ">
    <input type="text" name="todo" id="NewToDO" />
    <button @click.prevent="addNewToDo()">add</button>
  </form>
  <ul id="displayTodos">
    <!-- <li>
      <p>{{todo.name}}</p>
      <p>{{todo.completed}}</p>
    <button>done</button>
    <button>edit</button>
    <button>delete</button></li> -->
  </ul>
</template>

<style scoped></style>
