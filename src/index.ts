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
