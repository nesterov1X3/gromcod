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



//найти кнопку querySelector
//создать li, задать ей стили
//добавить ей значение input
//запушить в массив
//создать событие клик для create

  function addSomeInput(itemList){

    const findInput = document.querySelector('.task-input');
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      listItemElem.innerHTML = findInput.value;
    //   console.log(listItemElem.innerHTML = findInput.value);
    
   
    itemList.append(...listItemElemtnts)
    // itemList.push(listItemElem);
    
  }
  
  const findBtn = document.querySelector('.create-task-btn');
  findBtn.addEventListener('click', addSomeInput(tasks))

