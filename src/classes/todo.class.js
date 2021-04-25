export class Todo{

    constructor( tarea )
    {
        this.Tarea = tarea;
        this.Id = new Date().getTime(); 
        this.Completado = false;
        this.Creado = new Date();
    }
}