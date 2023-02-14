//ACá vamos a hacer un objeto con su constructor que nos serira de molde para las tareas
//que se muestran cuando se renderiza la app

export class Task {
    description= "";
    completed= false;

    constructor(description, completed) {
        this.description=description;
        this.completed=completed;
    }

}