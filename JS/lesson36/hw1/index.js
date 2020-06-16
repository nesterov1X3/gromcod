// сигнатура getUsersBlogs = () =>
//create func fetchBlogs(USERID)
//put fetchBlogs to getUsersBlogs
//

// const fetchBlogs = USERID => {
//     const response = fetch(`https://api.github.com/users/${USERID}`)
//     if (response.ok) {
//         return response.json()
//     }
//     throw new Error('Failed to load data')
// }

// export const getUsersBlogs = async users => {

//     try {
//         const reposList = fetchBlogs([...users].blog);
//         const usBlogs = await Promise.all([...reposList])
//         return usBlogs
//     } catch (err) {
//         console.log(err.message);
//     }

// } 
const getUsersBlogs = async usersList => {
    try {
        const requests = usersList
            .map(userId => fetch(`https://api.github.com/users/${userId}`).then(response => response.json()));
        const usBlogs = await Promise.all(requests);
        const users = usBlogs.map(({ blog }) => blog)
        return users;
    } catch (err) {
        throw new Error('Failed to load data');
    }
};
getUsersBlogs(['facebook', 'git'])
    .then(linksList => console.log(linksList))

