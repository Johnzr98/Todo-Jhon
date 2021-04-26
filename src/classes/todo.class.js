export class Todo{

    static fromJson( {Id, Tarea, Completado, Creado} )
    {
        const tempTodo = new Todo(Tarea);

        tempTodo.Id = Id;
        tempTodo.Completado = Completado;
        tempTodo.Creado = Creado;

        return tempTodo;
    }

    constructor( tarea )
    {
        this.Tarea = tarea;
        this.Id = new Date().getTime(); 
        this.Completado = false;
        this.Creado = new Date();
    }
}