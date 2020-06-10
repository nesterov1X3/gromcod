const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

/* getTasksList code here */
export const getTasksList = baseUrl=> {
   return fetch(baseUrl)
   .then(tasksList => tasksList.json())
}
// getTasksList(baseUrl)
// .then(tasksList => console.log(tasksList))
/* getTaskById code here */

export const getTaskById = taskid => {
    return fetch(`https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks/${taskid}`)
   .then(taskData => taskData.json())
}
// getTaskById(20)
// .then(taskData => console.log(taskData))