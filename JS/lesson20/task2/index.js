export class Vehicle {
    constructor(name, numberOfWheels) {
        this.name = name;
        this.numberOfWheels = numberOfWheels;
    }
    move() {
        console.log(`${this.name} is moving`)
    }
    stop() {
        console.log(`${this.name} stopped`)
    }
}

export class Ship extends Vehicle {
    constructor(name, maxspeed) {
        super(name, 3)
        this.maxspeed = maxspeed;
    }
    move() {
        console.log(`${this.name} lifting anchor up`),
            super.move()
    }
    stop() {
        super.stop(),
            console.log(`${this.name} lifting anchor down`)

    }
}

const vehicle1 = new Vehicle('Titanic', 3)
const ship1 = new Ship('Titanic', 323)
// console.log(ship1.maxspeed)





















//  const vehicle = {
//     name: 'Kargo',
//     move() {
//         console.log(`${this.name} is moving`)
//     },
//     stop() {
//         console.log(`${this.name} stopped`)
//     }
// }

//  const ship = {
//     age: 300,
//     __proto__: vehicle,
//     name: 'Argo',
//     startMachine() {
//         console.log(`${this.name} lifting anchor up`),
//             this.move()
//     },
//     stopMachine() {
//         this.stop(),
//             console.log(`${this.name} lifting anchor down`)

//     },
// }

// export function getOwnProps(ship) {
//  let resArrProp = []
//     for (let key in ship ){
//         if(ship.hasOwnProperty(key) && typeof ship[key] !== 'function'){
//             resArrProp.push(key)

//         }

//     }
//     return resArrProp
// }
