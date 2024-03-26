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
// let phone = document.getElementById("phone") as HTMLInputElement;
// phone.value;

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

// Create classes: blueprint of an object
class Account {
  readonly id: number; //read only
  owner: string;
  balance: number;
  nickname?: string; //this is optional !

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.balance = balance;
    this.owner = owner;
  }
  // Method (function inside a class)
  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this.balance += amount;
  }
}

// Create an object using the class

let account = new Account(1, "Aubin", 0);
account.deposit(100);
console.log(account.balance);
console.log(account);
console.log(account instanceof Account); //this returns true

// Read-Only and Optional Properties
// Look at the above class where we prefixed the id by readonly
// using a question mark after a property, this make him to be optional! look at the nickname? above

// Access Control Keywords
// use public, private, or protected up
class Account1 {
  readonly id: number; //read only
  owner: string;
  private _balance: number;
  nickname?: string; //this is optional !

  constructor(id: number, owner: string, _balance: number) {
    this.id = id;
    this._balance = _balance;
    this.owner = owner;
  }
  // Method (function inside a class)
  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }
  getBalance(): number {
    return this._balance;
  }
}
let account1 = new Account1(1, "Aubin", 0);
console.log(account1.getBalance());

// Parameter properties: better way to define the class above:
class Account2 {
  nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}
  // Method (function inside a class)
  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }
  get balance(): number {
    //getter
    return this._balance;
  }
  set balance(value: number) {
    //setter
    if (value < 0) throw new Error("Invalid value");
    this._balance = value;
  }
}
let account2 = new Account2(1, "Aubin", 0);
console.log(account2.balance); //getter
account.balance = 100; //setter

// Getters and setters(look up)

// Index signature: instead of creating a new property each time, we can use index signature
class SeatAssignment {
  [setNumber: string]: string;
}
let seats = new SeatAssignment();
seats.A1 = "Aubin";
seats.A2 = "Smith";

// Static members
class Ride {
  /*static*/ activeRides: number = 0;
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

// Inheritance: mechanism that allows us to reuse our code
class Person {
  constructor(public firstName: string, public lastName: string) {}
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
  walk() {
    console.log("Walking");
  }
}

class Student extends Person {
  //Student inherit from Person
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName); // reference the base(parent) class
  }
  takeTest() {
    console.log("Taking a test");
  }
}

let student = new Student(1, "John", "Smith"); //create a student object

// Method overriding
class Teacher extends Person {
  override get fullName() {
    return "Professor " + super.fullName;
  }
}
let teacher = new Teacher("Aubin", "SIAHA");
console.log(teacher.fullName);

// Polymorphism
printNames([new Student(1, "John", "Smith"), new Teacher("Aubin", "SIAHA")]);
function printNames(people: Person[]) {
  for (let person of people) console.log(person.fullName);
}

// private(accessed only in the class) vs protected(accessed also in inherited classes)

// Abstract class

abstract class Shape {
  constructor(public color: string) {}
  abstract render(): void;
}
class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log("Rebdering a circle");
  }
}
// let shape = new Shape("red");

// Interfaces
// abstract class Calendar {
//   constructor(public name: string) {}
//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }
// REDO THE SAME
interface ICalendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}
interface ICloudCalendar extends ICalendar {
  sync(): void;
}

class GoogleCalendar implements ICalendar {
  constructor(public name: string) {}
  addEvent(): void {
    throw new Error("Method not implemented.");
  }
  removeEvent(): void {
    throw new Error("Method not implemented.");
  }
}
