
import './styles.css';
import { Todo, TodoList } from './classes/indexAll.js';
import { newTodoHtml } from './js/componentes.js';


export const todoList = new TodoList();

todoList.Todos.forEach(todo => 
{
    newTodoHtml(todo);
});

console.log('Todos: ',todoList.Todos);