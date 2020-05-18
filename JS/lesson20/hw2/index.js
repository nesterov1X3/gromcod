
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
    constructor(id, name, sessionId) {
        super(id, name, sessionId);
        this.users = [User];
        let frezeSomeObj = this.users.map(item => {
            return  Object.freeze(item)
         });
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

    getUserNames() {
        return this.users.name
    }
    getUserIds() {
        return this.users.id
    }
    getUserNameById() {
        return name
    }
}
// const user1 = new User("213", "3223", "fsd34")
// console.log(user1);
