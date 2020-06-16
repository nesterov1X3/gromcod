// сигнатура getUsersBlogs = () =>
//create func fetchBlogs(USERID)
//put fetchBlogs to getUsersBlogs
//


export const getUsersBlogs = async () => {
    
    try{
        const reposList = fetchBlogs(blog);
    
    } catch(err){
        console.log(err.message); 
    }
    
}


const fetchBlogs = USERID => {
    const response = fetch(`https://api.github.com/users/${USERID}`)
    if(response.ok){
        return  response.json()
      }
      throw  new Error('Failed to load data')
}