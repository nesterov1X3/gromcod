import {onToggleTask} from './toggleTask.js'
import {onCreateTask} from './createTasks.js'
export const initTodoListHandlers = () => {
const createBtnElem = document.querySelector(".create-task-btn");
createBtnElem.addEventListener("click", onCreateTask);
const todoListElem = document.querySelector(".list");
todoListElem.addEventListener("click", onToggleTask);
}