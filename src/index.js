import "./styles.css";
import { addTask, deleteTask, toggleTask } from "./task";
import { renderTasks } from ":/ui";

document.addEventListener("DOMContentLoaded", () => {
    renderTasks();

    document.getElementById("task-form").addEventListener("submit", (e) => {
        e.preventDefault();

        const taskInput = document.getElementById("task-input").value;
    });
});