import React, {useState} from 'react';
import {Task} from "./../tareas";
import TaskComponentHijo from "../Componentes/taskComponentHijo";
import TaskForm from '../Componentes/taskForm';
import background from "../assets/tareas3.jpg";



const TaskComponent = () => {

    //Tareas que se renderizan automaticamente

    const defaultTask1 = new Task("Estudiar react js", false);
    const defaultTask2 = new Task("Crear mi portfolio", false);
    const defaultTask3 = new Task("Crear componentes", false);

    //Usamos el useState para modificar el estado de las tareas

    const [tasks, setTask] = useState([defaultTask1, defaultTask2, defaultTask3]);

    //Creamos la funcion para completar la tarea

    function completedTask (task) {
        const index = tasks.indexOf(task); //Nos trae el indice
        const tempTask =[...tasks]; // nos crea una copia
        tempTask[index].completed = !tempTask[index].completed;    //Aplicar la negacion para saber si se completo o no
        setTask(tempTask);                
    }

    // Funcion para eliminar tareas

    function deleteTask (task) {
        const index = tasks.indexOf(task); //Nos trae el indice
        const tempTask =[...tasks]; // nos crea una copia
        tempTask.splice(index, 1);  //Eliminamos del array
        setTask(tempTask);                
    }

    // Funcion para añadir una tarea

    function addTask (task) {
        const index = tasks.indexOf(task); //Nos trae el indice
        const tempTask =[...tasks]; // nos crea una copia
        tempTask.push(task);
        setTask(tempTask);                
    }


    return (
        <div className='container'>
            <div  style={{ backgroundImage: `url(${background})`}} >
                <h1 className='text-center letras fw-bold'>Lista de tareas</h1>
                {tasks.map((task, index) => { 
                return(
                <TaskComponentHijo key={index} task={task} complete={completedTask} remove={deleteTask}/>);
                })}
            <TaskForm add={addTask} />
            </div>
        </div>
    );
};

export default TaskComponent;

                
            
            
