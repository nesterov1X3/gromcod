export function defer(func, ms){
    return function(){
       setTimeout(() => func.call(this, ...arguments), ms);
    }
}

const user = {
    name: 'Tom',
    sayHi() {
        console.log(`Hi, I'am ${this.name}!`)
    }
}

const deferredHi = defer(user.sayHi.bind(user), 1000);
deferredHi();