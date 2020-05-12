export const vehicle = {
    name: 'Argo',
    move() {
        console.log(`${this.name} is moving`)
    },
    stop() {
        console.log(`${this.name} is stopped`)
    }
}

export const ship = {
    name: 'Argo',
    startMachine(){
        console.log(`${this.name} lifting anchour up`),
        move()
    },
    stopMachine(){
        stop(),
        console.log(`${this.name} lifting anchour down`) 
    },
    __proto__: vehicle,
} 

// ship.startMachine()
