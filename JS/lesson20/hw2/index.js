
class User {
    constructor(id, name, sessionld) {
        this.id = id;
        this.name = name;
        this.sessionld;
}
        get id() {
            return this._id;
        }
        get name() {
            return this._name;
        }
        get sessionld() {
            return this._sessionld;
        }
    
}

class UserRepository extends User{
    constructor(id, name, sessionld) {
        super(id, name, sessionld);
        this.users = [];
    }


    getUserNames() {
        return this.users.push(name);
    }
    getUserIds() {
        return this.users.push(id);
    }
    getUserNameById() {
        return name
    }
}

