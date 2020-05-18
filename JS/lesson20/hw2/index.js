
export class User {
    constructor(id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    }
        get id() {
            return this._id;
        }
        get name() {
            return this._name;
        }
        get sessionId() {
            return this._sessionId;
        }
    
}

export class UserRepository extends User{
    constructor(users) {
        super()
        this._users = Object.freeze(users);
        // this._users.map(item => {
        //     return Object.freeze(item)
        // })
    }
    get users() {
        return this._users;
    }

    getUserNames() {
        return this._users.map(item => item._name)
    }
    getUserIds() {
        return this.users.map(item => item._id)
    }
    getUserNameById() {
        return this.users.map(item => item._sessionId)
    }
}
let user1 = new User('33121', 'Kevin', '1')
let user2 = new User('243', 'Stiv', '2')
let usersProp = [user1, user2]
let repFromUsers = new UserRepository(usersProp)
// console.log(repFromUsers);

// console.log(repFromUsers.getUserNameById());
