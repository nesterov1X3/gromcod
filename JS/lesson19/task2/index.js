export const vehicle = {
    name: 'Kargo',
    move() {
        console.log(`${this.name} is moving`)
    },
    stop() {
        console.log(`${this.name} stopped`)
    }
}

export const ship = {
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
export function getOwnProp() {
    for (let key in ship){
        if(ship.hasOwnProperty(key)){
        console.log(key);
        }
        
    }
}
// getOwnProp()



// let propShip = Object.keys(ship)
// console.log(propShip);
