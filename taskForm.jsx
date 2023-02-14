//Formulario

import React, {useRef} from "react";
import PropTypes from "prop-types";
import { Task } from "../tareas";


const TaskForm = ({add}) => {  //Investigar porque
    
    const descriptionRef= useRef(""); //Inizializamos el useRef

    function addTask(e) {

        e.preventDefault();         //Para no cargue todo de neuvo al traer el evento
        const newTask = new Task(descriptionRef.current.value.toString(), false);
        add(newTask);
        descriptionRef.current.value = "";
    }



    return (
        <div>
            <form onSubmit={addTask} className="d-flex justify-content-center align-items-center mb-4 pt-4">
                <div className='form-outline flex-fill pt-1'>
                        <input ref={descriptionRef} id="inputDescription" type="text" className="form-control form-control control mt-2 " require placeholder='Descripción'/>
                    <div className='p-2 d-flex justify-content-center align-items-center'>
                            <button className="cssbuttons-io-button" type="submit"> Añadir tarea
                                <div class="icon">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                                </div>
                            </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
}

export default TaskForm;
        
  
