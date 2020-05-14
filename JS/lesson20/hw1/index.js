export class Order {
    constructor(price, city, type){
        id = Math.random();
        this.price = price;
        dateCreated = getTime();
        isConfirmed = false;
        dateConfirmed = new Date();
        this.city = city;
        this.type = type;
    }
    checkPrice(){
        if(price > 1000){
            return true
        }
        return false
    }
    confirmOrder(){
        isConfirmed = true;
        dateConfirmed = new Date();
    }
    isValidType(){
        if(type == 'Buy' && type == 'Sell'){
            return true
        }
        return false
    }
}
const order1 = new Order(323, 'Houston', 'Buy')