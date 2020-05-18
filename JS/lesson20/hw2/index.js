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
        get _sessionId() {
            return this._sessionId;
        }
    
}

class UserRepository extends User{
    constructor(users) {
        this._users.map(item => {
            return Object.freeze(item)
        })
    }
    // get users() {
    //     return this._users;
    // }

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
let user1 = new User('1', 'Tom', '0')
let user2 = new User('2', 'Stiv', '1')
let users = [user1, user2]
let userrep1 = new UserRepository(users)
console.log(userrep1);

