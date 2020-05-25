const tasks = [
    { text: "Buy milk", done: false },
    { text: "Pick up Tom from airport", done: false },
    { text: "Visit party", done: false },
    { text: "Visit doctor", done: true },
    { text: "Buy meat", done: true },
  ];
  
  const renderListItems = (listItems) => {
    const listElem = document.querySelector(".list");
    const listItemsElems = listItems
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      if (done) {
        listItemElem.classList.add("list__item_done");
      }
      const checkBoxElem = document.createElement("input");
      checkBoxElem.setAttribute("type", "checkbox");
      checkBoxElem.checked = done;
      checkBoxElem.classList.add("list__item-checkbox");
      listItemElem.append(checkBoxElem, text);
  
      return listItemElem;
    });
  
    listElem.append(...listItemsElems);

    
  };
  renderListItems(tasks);




  function addSomeInput(){
    const listElem = document.querySelector('.list')
    const listItemElem = document.createElement("li");
    const findInput = document.querySelector('.task-input');
    
    const listItemsElems = tasks
    .sort((a, b) => a.done - b.done)
    .map(({done}) =>{
      listItemElem.classList.add("list__item");
      
      listItemElem.innerHTML = findInput.value
      
      if (done) {
        listItemElem.classList.add("list__item_done");
      }
      const checkBoxElem = document.createElement("input");
      checkBoxElem.setAttribute("type", "checkbox");
      // checkBoxElem.checked = done;
      checkBoxElem.classList.add("list__item-checkbox");
      listItemElem.append(checkBoxElem);
      
      return listItemElem;
     
    })
    // if(listItemElem.innerHTML == ''){
    //   listElem.remove(findInput.value)
    //  }else
      listElem.append(listItemElem)
      findInput.value = '';
  }
  const reomoveEmptyString = () => {
    const listElem = document.querySelector('.list')
    const listItemElem = document.createElement("li");
    const findInput = document.querySelector('.task-input');
    listItemElem.innerHTML = findInput.value
    if(findInput.value = ''){
      listElem.remove(listItemElem.innerHTML)
    }
  }











  const findBtn = document.querySelector('.create-task-btn');
  findBtn.addEventListener('click', addSomeInput)

