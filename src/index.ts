let sales: number = 123_456_789;
let course: string = "TypeScript";
let is_published: boolean = true;

// any type:
let level;
level = 1;
level = "a";

// Arrays
let numbers: number[] = [1, 2, 3, 4];
let num = []; //the type here is any

// tuples
let user: [number, string] = [1, "Aubin"];
user.push(1);

// enums
// const small=1;
// const medium = 2;
// const large = 3;

const enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}
let mySize: Size = Size.Medium;
console.log(mySize);

// functions
function calculateTax(income: number, taxYear: number): number {
  //the : number is the return type
  if (taxYear < 2024) return income * 1.2;
  return income * 1.3;
}
calculateTax(10_000, 2024);

// Objects
let employee: {
  readonly id: number;
  name: string;
} = {
  id: 1,
  name: "",
};
employee.name = "John";

let employ: {
  readonly id: number;
  name: string;
  retire: (date1: Date) => void;
} = {
  id: 1,
  name: "",
  retire: (date1: Date) => {
    console.log(date1);
  },
};

// aliases type

type Employee = {
  readonly id: number;
  name: string;
  retire: (date1: Date) => void;
};
// first we define up, and then we can use it in multiplaces as follow
let employee2: Employee = {
  id: 1,
  name: "Aubin",
  retire: (date: Date) => {
    console.log(date);
  },
};

// Union types: give a variable or a function parameters more than one type
function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") return weight * 2.2;
  else {
    return parseInt(weight) * 2.2;
  }
}

kgToLbs(10);
kgToLbs("10kg");

// intersection types: combine types
type Draggable = {
  drag: () => void;
};
type Resizable = {
  resize: () => void;
};
// now intersect
type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// Litteral types: Limit the value we wanna assign to a variable
type Quantity = 50 | 100;
let quantity: Quantity = 50;

type Metric = "cm" | "inch";

// nullable types
function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase);
  else console.log("Hola!");
}
greet(null);

// Optional Chaining
type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// if(customer !== null && customer !== undefined)
// insted of the comented line, we can use Optional property access operator
console.log(customer?.birthday);

// the nullish coaelscing operator
let speed: number | null = null;
let ride = {
  speed: speed ?? 30,
};

// Type Assertions
let phone = document.getElementById("phone") as HTMLInputElement;
phone.value;

// the unknown type
// function render(document: unknown) {
//if the type is any, you won't see any error, but it move() does not exist in your program, your code will crash
//   if(typeof document==='string'){
//     document.toUpperCase();
//   }
//   document.move();
// }

// the never type: represents value that never occurs
function processEvents(): never {
  while (true) {
    //...
  }
}
// processEvents();
console.log("Hello World!");
