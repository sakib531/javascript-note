console.log("Hello , I am Sakib ");

console.log("i am an student of computer science and engineering"); // console is an reserved word //
console.log("javascript is an dynamically typed language");

fullName="tony stark"; // thease are only examle for variable , never use it for practical coding // alwase use reserved word ( keyword ) //
// FullName // pascale case //
// full-name // kababcase //
// full_name // snake case //
//fullName // camel case //

x=null;//special value// // here x is an assignment oparator // // and it 's applicable to every variable //

y="undefine";//special value// // variable's name must be in letters digits underscore("_") and dollar("$") //

isFollow=true;//boollean value //

notFollow=false;//boollean value //

console.log(fullName);
// FullName // pascale case //
// full-name // kababcase //
// full_name // snake case //
//fullName // camel case //
let name = "tony stark"; // let is a keyword //
let age = "24"; // it's a block scope variable // 
var totalPrize = "12345" // it's also a keyword , but we will not use it , because we can declear same variable again and again so tjere will be error in some place if we use it // it's a world scope variable //
const pi = "3.14"; // you can not re-declare it or  upload it // it will stay constant // it's a block scope variable //
console.log(name);
// " typeof " is an code that print the types of variable // 
// there are 7 types of data type (variable) , these are primitive data type //
// there are non-primative data type and " object " is one of them , in it there are some catagory like "array" and " function ", if we print " null " it will print " object " // look at the example in 12 th line //
// we can think object as a collection of various information or value //
// there are non-primative data type like " BigInt "  and " Symble " , these are rearlly used , i mean really hardlt rearlly //

const student = { // you can declare object with const // you can also use let //
    fullName : "tony stark",
    age : 32,
    price : 22.5,
    isPass : true
}; // if we want only an specifide value like name we can use "student["fullName"] " or " student.fullName " , we can also say this variable as "key" and assign the value //

console.log(student["age"]);
console.log(student.price);

// wamma print new value , do it like that //

student["age"] = student["age"] + 2;
console.log(student["age"]);

// here's a twist we know that we can not change const , but in object we can change it's key ;