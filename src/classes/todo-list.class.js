
export class TodoList{

    constructor(){
        this.Todos = [];
    }

    newTodo( todo )
    {
        this.Todos.push( todo );
    }

    deleteTodo( id )
    {
        this.Todos = this.Todos.filter(todo => todo.Id != id);
    }

    checkTodo( id )
    {
        for(const todo of this.Todos)
        {
            console.log(id, todo.Id);

            if(todo.Id == id)
            {
                todo.Completado = !todo.Completado;
                break;
            }
        }
    }

    deleteAllTodo( id )
    {
        
    }
}