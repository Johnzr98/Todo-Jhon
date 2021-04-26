import { Todo } from '../classes/indexAll.js';
import { todoList } from '../index.js';

// Referencias en el HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnDeleteChecks = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');


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

divTodoList.addEventListener('click', ( event ) =>
{
    const nameElement = event.target.localName; // input, label, button
    const todoElement = event.target.parentElement.parentElement;
    const todoId = todoElement.getAttribute('data-id');

    if(nameElement.includes('input'))// click en el check
    {
        todoList.checkTodo(todoId);
        todoElement.classList.toggle('completed');
    }
    else 
    if(nameElement.includes('button'))// hay que borrar el todo
    {
        todoList.deleteTodo(todoId);
        divTodoList.removeChild(todoElement);
    }

    console.log(todoList);
});

btnDeleteChecks.addEventListener('click', () => 
{
    todoList.deleteAllTodosChecks();

    for(let i = divTodoList.children.length - 1; i >= 0; i-- )
    {
        const element = divTodoList.children[i];

        if(element.classList.contains('completed'))
        {
            divTodoList.removeChild(element);
        }
    }
});

ulFiltros.addEventListener('click', ( event ) => 
{
    const filtro = event.target.text;
    console.log(event);

    if(!filtro){return;}

    anchorFiltros.forEach( elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');

    for(const elemento of divTodoList.children)
    {
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch(filtro)
        {
            case 'Pendientes':
                if(completado)
                {
                    elemento.classList.add('hidden');
                }
                break;
            case 'Completados':
                if(!completado)
                {
                    elemento.classList.add('hidden');
                }
                break;
            case 'Todos':
                break;
        }
    }
});