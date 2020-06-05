//create function, arguments(userId, callback)
//create obj with id and email
//error first, write error with some text
//call callback with some delay
const requestUserData = (userId, callback) => {
    if(userId == 'broken'){
        callback(null, 'Failed to load user data');
        return;
    }

    const user = {
        userId,
        email: `${userId}@example.com`
    }
    setTimeout(() =>  callback(user),Math.ceil(Math.random() * 3 * 1000));
}
// requestUserData('userid777', )