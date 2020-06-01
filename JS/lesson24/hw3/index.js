
const listElem = document.querySelector('.list');
const tasks = [
    { text: 'Buy milk', done: false, createDate: '2019-11-24T15:51:32.222Z', id: '1' },
    { text: 'Pick up Tom from airport', done: false, createDate: '2019-11-25T15:51:32.222Z', id: '2' },
    { text: 'Visit party', done: false, createDate: '2019-11-26T15:51:32.222Z', id: '3' },
    { text: 'Visit doctor', done: true, createDate: '2019-11-27T15:51:32.222Z', id: '4' },
    { text: 'Buy meat', done: true, createDate: '2019-11-28T15:51:32.222Z', id: '5' },
];
const renderTasks = tasksList => {
    listElem.innerHTML = '';
    const tasksElems = tasksList
        .slice()
        .sort((a, b) => a.done - b.done)
        // .sort((a, b) => new Date(a.createDate) - new Date(b.createDate))
        .map(({ text, done, id }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('data-id', id);
            // checkbox.setAttribute('data-create', createDate);
            checkbox.checked = done;
            checkbox.classList.add('list__item-checkbox');
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            listItemElem.append(checkbox, text);
            return listItemElem;
        });
    listElem.append(...tasksElems);
};
renderTasks(tasks);


const onToggleTask = e => {
    const isCheckbox = e.target.classList.contains('list__item-checkbox');
    if (!isCheckbox) {
        return;
    }
    const taskData = tasks.find(task => task.id === e.target.dataset.id);
    Object.assign(taskData, { done: e.target.checked });
    renderTasks(tasks);
};


const todoListElem = document.querySelector('.list');
todoListElem.addEventListener('click', onToggleTask);
const createBtnElem = document.querySelector('.create-task-btn');
const onCreateTask = () => {
    const taskTitleInputElem = document.querySelector('.task-input');
    const text = taskTitleInputElem.value;
    if (!text) {
        return;
    }
    taskTitleInputElem.value = '';
    tasks.push({
        text,
        done: false,
        createDate: new Date().toISOString(),
        id: Math.random().toString()
    });
    renderTasks(tasks);
};
createBtnElem.addEventListener('click', onCreateTask);
















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
