export function getItemsList(){
     console.dir(document.querySelectorAll('.technology'))
     return document.querySelectorAll('.technology')
}
getItemsList()
export function getItemsArray(){
     let arrFromDoc = Array.from(document.querySelectorAll('.tool'))
     console.dir(arrFromDoc)
     return arrFromDoc
}
getItemsArray()