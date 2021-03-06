import {renderTasks} from './checkbox.js'
import {tasks} from './storage.js'


const listElem = document.querySelector(".list");
const compareTasks = (a, b) => {
  if (a.done - b.done !== 0) {
    return a.done - b.done;
  }
  if (a.done) {
    return new Date(b.doneDate) - new Date(a.doneDate);
  }
  return new Date(b.createDate) - new Date(a.createDate);
};



const onToggleTask = (e) => {
  const isCheckbox = e.target.classList.contains("list__item-checkbox");

  if (!isCheckbox) return;
  
  const taskData = tasks.find((task) => task.id === e.target.dataset.id);

  taskData.done = e.target.checked;
  taskData.done
    ? (taskData.doneDate = new Date().toISOString())
    : (taskData.doneDate = null);

  renderTasks(tasks);
};

const todoListElem = document.querySelector(".list");
todoListElem.addEventListener("click", onToggleTask);

const createBtnElem = document.querySelector(".create-task-btn");
const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector(".task-input");
  const text = taskTitleInputElem.value;
  if (!text) {
    return;
  }
  taskTitleInputElem.value = "";
  tasks.push({
    text,
    done: false,
    createDate: new Date().toISOString(),
    doneDate: null,
    id: Math.random().toString(),
  });
  renderTasks(tasks);
};

createBtnElem.addEventListener("click", onCreateTask);















// const tasks = [
//     { text: "Buy milk", done: false },
//     { text: "Pick up Tom from airport", done: false },
//     { text: "Visit party", done: false },
//     { text: "Visit doctor", done: true },
//     { text: "Buy meat", done: true },
//   ];
  
//   const renderListItems = (listItems) => {
//     const listElem = document.querySelector(".list");
//     const listItemsElems = listItems
//     .sort((a, b) => a.done - b.done)
//     .map(({ text, done }) => {
//       const listItemElem = document.createElement("li");
//       listItemElem.classList.add("list__item");
//       if (done) {
//         listItemElem.classList.add("list__item_done");
//       }
//       const checkBoxElem = document.createElement("input");
//       checkBoxElem.setAttribute("type", "checkbox");
//       checkBoxElem.checked = done;
//       checkBoxElem.classList.add("list__item-checkbox");
//       listItemElem.append(checkBoxElem, text); 
//       return listItemElem;
//     });
//     listElem.append(...listItemsElems);
   
//   };
//   renderListItems(tasks);
// //добавление инпута в лист
//   function addSomeInput(){
//     const listElem = document.querySelector('.list')
//     const listItemElem = document.createElement("li");
//     const findInput = document.querySelector('.task-input');    
//     const listItemsElems = tasks
//     .sort((a, b) => a.done - b.done)
//     .map(({done}) =>{
//       listItemElem.classList.add("list__item");    
//       listItemElem.innerHTML = findInput.value   
//       if (done){      
//         // listItemElem.classList.add("list__item_done");
//       }   
//       const checkBoxElem = document.createElement("input");
//       checkBoxElem.setAttribute("type", "checkbox");
//       checkBoxElem.checked = done;
//       checkBoxElem.classList.add("list__item-checkbox");
//       listItemElem.append(checkBoxElem);     
//       // }
//     }) 

//     const taskTitleInputElem = document.querySelector('.task-input');
//     const text = taskTitleInputElem.value;
//     if (!text) {
//         return;
//     }
//       listElem.append(listItemElem)    
//       findInput.value = '';   
//   }
//   const findBtn = document.querySelector('.create-task-btn');
//   findBtn.addEventListener('click', addSomeInput)

// const switchEl = event => {

// }
