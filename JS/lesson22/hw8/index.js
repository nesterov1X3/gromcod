function changeStatusOfCheckBox(event){
     if(event.target.checked === true){
    console.log(event.target.checked);
     }else{
          console.log(event.target.checked); 
     }
    
}
const findCheckBox = document.querySelector('.task-status');
findCheckBox.addEventListener('change',changeStatusOfCheckBox)