// funtion constructor 
const Computer = function (name, price) {
    this.name = name;
    this.price = price;
}
// linked with prototype
Computer.prototype.aboutComputer = function () {
    console.log(`name of pc ${this.name} and price ${this.price}`);
}
// when do not need aboutComputer funtion 
const asus = new Computer('asus', 2000)
const hp = new Computer('hp', 5000)
// console.log(hp)
// when need aboutComputer funtion 
// hp.aboutComputer()



const HouseRent = function (rent) {
    this.rent = rent;
}
HouseRent.prototype.increment = function () {
    this.rent += 1000;
    console.log(`yearly house rent increment ${this.rent}`);
}
HouseRent.prototype.decrement = function () {
    this.rent -= 1000;
    console.log(`yearly house rent decrement ${this.rent}`);
}
const myHouse = new HouseRent(10000)
// console.log(myHouse)
// myHouse.decrement()
// myHouse.increment()


class HouseRent2 {
    constructor(rent) {
        this.rent = rent;
    }
    increment() {
        this.rent += 1000;
        console.log(`yearly house rent increment ${this.rent}`);
    }

    decrement() {
        this.rent -= 1000;
        console.log(`yearly house rent decrement ${this.rent}`);
    }
}

const myHouse2 = new HouseRent2(20000)
// console.log(myHouse2)
// myHouse2.increment()
// console.log(myHouse2)
// myHouse2.decrement()
// console.log(myHouse2)



// function constructor 
const Computer2 = function (name, price) {
    this.name = name;
    this.price = price;
}
Computer2.aboutComputer = function () {
    console.log(`name of pc asus`);
}
const asus2 = new Computer2('asus', 4000)
Computer2.aboutComputer()

// class constructor 
class Computer3 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    static aboutComputer = function () {
        console.log(`name of pc asus`);
    }
}
const asus3 = new Computer3('asus', 2000)
Computer3.aboutComputer()






// class constructor 
class Computer4 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    static aboutComputer = function () {
        console.log(`name of pc asus`);
    }
    get priceCount() {
        return this.price;
    }
    set priceCount2(value) {
        this.value = value;
    }
}
const asus4 = new Computer4('asuss', 2000)
Computer4.priceCount2 = 'asus'
console.log(Computer4.priceCount2)
