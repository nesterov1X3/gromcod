import {onToggleTask, onCreateTask} from './index.js'
import {tasks} from './storage.js'


export const renderTasks = (tasksList) => {
    listElem.innerHTML = "";
    const tasksElems = tasksList
      .slice()
      .sort(compareTasks)
      .map(({ text, done, id }) => {
        const listItemElem = document.createElement("li");
        listItemElem.classList.add("list__item");
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("data-id", id);
        checkbox.checked = done;
        checkbox.classList.add("list__item-checkbox");
        if (done) {
          listItemElem.classList.add("list__item_done");
        }
        listItemElem.append(checkbox, text);
        return listItemElem;
      });
    listElem.append(...tasksElems);
  };
  
  renderTasks(tasks);