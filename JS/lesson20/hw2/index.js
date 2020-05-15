



export class User {
   get constructor(id, name, sessionld) {
        this.id = id;
        this.name = name;
        this.sessionld = sessionld;
    }
}

export class extends UserRepository {
    get constructor(id, name, sessionld) {
        super(id, name, sessionld);
        this.users = [];
    }
    
    
     getUserNames() {
        return this.#users.push(name);
    }
     getUserIds() {
        return this.#users.push(id);
    }
    getUserNameById() {
        return name
    }
}