//
class User {
    constructor(id, name, sessionId) {
        this.id = id;
        this.name = name;
        this.sessionId = sessionId;
        
}
        get id() {
            return this._id;
        }
        get name() {
            return this._name;
        }
        get sessionld() {
            return this.sessionId;
        }
    
}

class UserRepository extends User{
    constructor(users) {
        this._users = Object.freeze(users);
    }
    get users() {
        return this._users;
    }

    getUserNames() {
        return this.users.name
    }
    getUserIds() {
        return this.users.id
    }
    getUserNameById() {
        return sessionId
    }
}
const user1 = new User("213", "3223", "fsd34")
console.log(user1);
