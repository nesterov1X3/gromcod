export class User {
    constructor(id, name, sessionld) {
        this.id = id;
        this.name = name;
        this.sessionld = sessionld;
    }
}

export class extends UserRepository {
    constructor(id, name, sessionld) {
        super(id, name, sessionld);
        this.#users = [];
    }

    get #getUserNames() {
        return this.#users.push(name);
    }
    get #getUserIds() {
        return this.#users.push(id);
    }
    get #getUserNameById() {
        return name
    }
}