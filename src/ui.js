//Importar una función//
import { getTasks } from "./task";

//Funcion para mostrarle al usuario las tareas//
export const renderTasks = () => {
    const tasksList = document.getElementById("task-list");
    tasksList.innerHTML = "";
    const tasks = getTasks();
    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.setAttribute("data-id", task.id);
        //Añadir clase solo si la tarea esta completa//
        if(task.completed === true) {
            li.classList.add("completed");
        }
        li.innerHTML = `
          ${ task.text}
          <button class"delete"> Eliminar </button>
          <button class"toggle"> ${ task.completed === true ? "Deshacer" : "Completar" } </button>
        `;
        tasksList.appendChild(li);
    });
};