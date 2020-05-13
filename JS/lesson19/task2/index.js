 const vehicle = {
    name: 'Kargo',
    move() {
        console.log(`${this.name} is moving`)
    },
    stop() {
        console.log(`${this.name} stopped`)
    }
}

 const ship = {
    age: 300,
    __proto__: vehicle,
    name: 'Argo',
    startMachine() {
        console.log(`${this.name} lifting anchor up`),
            this.move()
    },
    stopMachine() {
        this.stop(),
            console.log(`${this.name} lifting anchor down`)

    },
}

export function getOwnProps(ship) {
 let resArrProp = []
    for (let key in ship ){
        if(ship.hasOwnProperty(key) && typeof ship[key] !== 'function'){
            resArrProp.push(key)
            
        }
        
    }
    return resArrProp
}
// const result = getOwnProps(ship)
// console.log(result);



// let propShip = Object.keys(ship)
// console.log(propShip);
