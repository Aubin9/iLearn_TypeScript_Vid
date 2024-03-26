"use strict";
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let level;
level = 1;
level = "a";
let numbers = [1, 2, 3, 4];
let num = [];
let user = [1, "Aubin"];
user.push(1);
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear) {
    if (taxYear < 2024)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000, 2024);
let employee = {
    id: 1,
    name: "",
};
employee.name = "John";
let employ = {
    id: 1,
    name: "",
    retire: (date1) => {
        console.log(date1);
    },
};
let employee2 = {
    id: 1,
    name: "Aubin",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs("10kg");
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 50;
function greet(name) {
    if (name)
        console.log(name.toUpperCase);
    else
        console.log("Hola!");
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30,
};
function processEvents() {
    while (true) {
    }
}
console.log("Hello World!");
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.balance = balance;
        this.owner = owner;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this.balance += amount;
    }
}
let account = new Account(1, "Aubin", 0);
account.deposit(100);
console.log(account.balance);
console.log(account);
console.log(account instanceof Account);
class Account1 {
    constructor(id, owner, _balance) {
        this.id = id;
        this._balance = _balance;
        this.owner = owner;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
    }
    getBalance() {
        return this._balance;
    }
}
let account1 = new Account1(1, "Aubin", 0);
console.log(account1.getBalance());
class Account2 {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0)
            throw new Error("Invalid value");
        this._balance = value;
    }
}
let account2 = new Account2(1, "Aubin", 0);
console.log(account2.balance);
account.balance = 100;
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = "Aubin";
seats.A2 = "Smith";
class Ride {
    constructor() {
        this.activeRides = 0;
    }
    start() {
        this.activeRides++;
    }
    stop() {
        this.activeRides--;
    }
}
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(ride1.activeRides);
console.log(ride2.activeRides);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log("Walking");
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log("Taking a test");
    }
}
let student = new Student(1, "John", "Smith");
class Teacher extends Person {
    get fullName() {
        return "Professor " + super.fullName;
    }
}
let teacher = new Teacher("Aubin", "SIAHA");
console.log(teacher.fullName);
printNames([new Student(1, "John", "Smith"), new Teacher("Aubin", "SIAHA")]);
function printNames(people) {
    for (let person of people)
        console.log(person.fullName);
}
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log("Rebdering a circle");
    }
}
class GoogleCalendar {
    constructor(name) {
        this.name = name;
    }
    addEvent() {
        throw new Error("Method not implemented.");
    }
    removeEvent() {
        throw new Error("Method not implemented.");
    }
}
//# sourceMappingURL=index.js.map