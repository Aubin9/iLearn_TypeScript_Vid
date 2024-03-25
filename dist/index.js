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
let phone = document.getElementById("phone");
phone.value;
function processEvents() {
    while (true) {
    }
}
console.log("Hello World!");
//# sourceMappingURL=index.js.map