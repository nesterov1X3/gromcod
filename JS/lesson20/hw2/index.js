export class User {
    constructor(id, name, sessionold) {
        this.id = id;
        this.name = name;
        this.sessionold = sessionold
    }
}

export class UserRepository {
    constructor(id, name, sessionold) {
        super(id, name, sessionold);
        this.#users = [];
    }

    get #getUsersNames() {
        return this.#users.push(name);
    }
    get #getUserIds() {
        return this.#users.push(id);
    }
    get #getUserNameById() {
        return name
    }
}