import { defineStore } from 'pinia'
export const usetodoList = defineStore('todolist',{
state:()=>({
  todos: localStorage.todos?JSON.parse(localStorage.todos) :[{ name: "NewToDO.value", completed: false, index: 1 },]
})
})
