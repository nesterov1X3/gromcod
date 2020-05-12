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
    __proto__: vehicle,
    name: 'Argo',
    startMachine(){
        console.log(`${this.name} lifting anchor up`,),
        this.move()
    },
    stopMachine(){
        this.stop(),
        console.log(`${this.name} lifting anchor down`) 
    },
    
} 
// Object.setPrototypeOf(ship,  vehicle )
ship.stopMachine()
