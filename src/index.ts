import * as _ from "lodash";
_.clone([1, 2, 3]);
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

// GENERICS
// Generic classes
class KeyValuePair<T> {
  //angular braquet is the generic attr
  constructor(public key: T, public value: string) {}
}
let pair = new KeyValuePair<number>(1, "a");
let pair1 = new KeyValuePair<string>("1", "a");

// Generic functions or methods
function wrapInArray<T>(value: T) {
  return [value];
}
let numbers1 = wrapInArray("1");
let numbers2 = wrapInArray(1);

// Generic interfaces
interface Result<T> {
  data: T | null;
  error: string | null;
}
function fetch<T>(url: string): Result<T> {
  url = url;
  return { data: null, error: null };
}

interface User {
  username: string;
}
interface Product {
  title: string;
}

let result = fetch<User>("url");
// result.data.

// Generic constraints
function echo<T extends number | string>(value: T): T {
  return value;
}
echo(1);

// extending generic classes
interface Product1 {
  name: string;
  price: number;
}
class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  // keyof
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
} /*
// Pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
  compress() {}
}
let store = new CompressibleStore<Product1>();
store.compress();

// Try another scenario: Restrict the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}

// Fix or terminating the generic type parameter
class ProductStore extends Store<Product1> {
  filterByCategory(category: string): Product1[] {
    return [];
  }
  find(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}*/
let store1 = new Store<Product1>();
store1.add({ name: "a", price: 1 });
store1.find("name", "a");
store1.find("price", 1);

// The keyof operator look above

// Type mapping
// type ReadOnlyProduct = {
//  readonly [K in keyof Product1]: Product1[K]
// }
//or
type ReadOnly<T> = {
  //we can replace T by Project1
  readonly [K in keyof T]: T[K];
};

// decorators
/*function Component(value: number) {
  return (constructor: Function) => {
    console.log("Component decorator called");
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.options = value;
    constructor.prototype.insertInDOM = () => {
      console.log("Inserting the component in the DOM");
    };
  };
}

function Pipe(constructor: Function) {
  console.log("Pipe decorator called");
  constructor.prototype.pipe = true;
}

@Component(1)
@Pipe
class ProfileComponent {}
ProfileComponent;*/

// Modules
import { Circle1 as MyCircle, Square1 } from "./shapes";
let circle = new MyCircle(1);
console.log(circle.radius);
let square = new Square1(2);
console.log(square.width);
