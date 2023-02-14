import React from 'react';
import PropTypes from 'prop-types';
import {Task} from "./../tareas";


const TaskComponentHijo = ({task, complete, remove}) => {

    //Creamos una funcion para que cambie el icono de tarea completada

    function taskCompletedIcon() {
        if (task.completed) {
            return(<i onClick={() => complete(task)} className="bi bi-check-square-fill" ></i>);
    }else {
        return(<i onClick={() => complete(task)} className="bi bi-check-square" ></i>);
    }
}

    return (
        <div className='d-flex justify-content-between fondo pt-2'>
            <p className='letras ms-3 '><span>{task.description} </span></p>
            <div className='me-5'>
                {taskCompletedIcon()}
                <i onClick={() => remove(task)} className="bi-trash task-action ms-5" style={{color:"#A370F0", fontSize:"18px"}} ></i>
            </div>
        </div>
    );
}

TaskComponentHijo.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired, /* Verifica que recibimos una TAREA del padre (task_list) */
    complete: PropTypes.func.isRequired, /* Va a ser una funcion que se ejecutara cuando le demos a los iconos */
    remove: PropTypes.func.isRequired 
    };

export default TaskComponentHijo;


