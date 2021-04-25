import { Todo } from '../classes/indexAll.js';
import { todoList } from '../index.js';

// Referencias en el HTML

const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');


export const newTodoHtml = ( todo ) => {

    const htmlTodo = 
    `<li class="${ (todo.Completado) ? 'completed' : ''}" data-id="${todo.Id}">
    <div class="view">
        <input class="toggle" type="checkbox" ${ (todo.Completado) ? 'checked' : ''}>
        <label>${todo.Tarea}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    //firstElementChild me añade el primer hijo para que no salga el div en la lista ordenada
    divTodoList.append(div.firstElementChild);

    return div;

}

// Eventos
txtInput.addEventListener('keyup', ( event ) =>
{
    if(event.keyCode === 13 && txtInput.value.length > 0)
    {
        const newTodo = new Todo( txtInput.value );
        todoList.newTodo( newTodo );
        newTodoHtml(newTodo);

        txtInput.value = '';
    }
});