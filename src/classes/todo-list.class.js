
export class TodoList{

    constructor()
    {
        // this.Todos = [];
        this.getDataLocalStorage();
    }

    newTodo( todo )
    {
        this.Todos.push( todo );
        this.saveLocalStorage();
    }

    deleteTodo( id )
    {
        this.Todos = this.Todos.filter(todo => todo.Id != id);
        this.saveLocalStorage();
    }

    checkTodo( id )
    {
        for(const todo of this.Todos)
        {
            console.log(id, todo.Id);

            if(todo.Id == id)
            {
                todo.Completado = !todo.Completado;
                this.saveLocalStorage();
                break;
            }
        }
    }

    deleteAllTodosChecks()
    {
        this.Todos = this.Todos.filter(todo => !todo.Completado);
        this.saveLocalStorage();
    }

    saveLocalStorage()
    {
        localStorage.setItem('todo', JSON.stringify(this.Todos));
    }

    getDataLocalStorage()
    {
        this.Todos = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [];
    }
}