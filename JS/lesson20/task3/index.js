export class Wallet {
    _balance = 0;

    getBalance(){
        return this._balance
    }
    deposit(amount){
        this._balance += amount;
    }
    withdraw(amount){
        if(amount > this._balance){
            console.log('Ho enough funds');
            return
        }
        this._balance -= amount
    }
}

// const wallet1 = new Wallet()
// console.log(wallet1.getBalance());

// wallet1.deposit(1000)
// console.log(wallet1.getBalance());
// wallet1.withdraw(-3333)
// console.log(wallet1.getBalance());