// // // let a  =34;
// // // a=56 // Reassignment Allowed

// // // // let a = 674; // cannot redclare

// // // var b = 67;
// // // b=65 // Reassignment Allowed
// // // // can

// // // const c = 23614;
// // // //No
// // //  // Not Allowed

// // //  console.log(a);
// // // console.log(b);
// // // console.log(c);

// // // let char = "hello bhaiya aap kaiso ho "

// // // console.log(char.slice(2 , 12));
// // // console.log(char.split("i"));
// // // console.log(char.replace("i" , "matjawaaaa"));
// // // console.log(char.replaceAll("a" , "meawwwwwwwwww"));

// // // let funxc = function(){
// // //     console.log("name");

// // // }

// // // console.log(typeof funxc);

// // // let Obj = {
// // //     name:"Sujit",
// // //     Uid:1
// // // }

// // // console.log(typeof Obj);

// // // let arr = []
// // // console.log(typeof arr);

// // // let add = "13"+ 45
// // // let dad = + 45
// // // let sub = "13"- 45
// // // let mult = "13"* 45

// // // var a = 10 ;

// // // {
// // //     console.log(a);
// // //     let a =20;
// // //     console.log(a);

// // // }
// // // console.log(a);

// // // function tricky(){
// // //     let a =20

// // //     {
// // //         function a(){
// // //             console.log("inner");//inner

// // //         }
// // //         console.log(a);

// // //     }
// // //     console.log(a);

// // // }
// // // tricky()

// // // console.log("hii");
// // // console.info("hii");

// // // Operators

// // // Control flow

// // // Early return pattern
// // // function getGrades(garde){
// // //     if(garde === null|| garde ===undefined || isNaN(garde) || garde === "" || garde < 0 || !isFinite(garde) || typeof garde !== "number" ) return "Invalid Marks";
// // //     else if(garde >=0 && garde <= 32 ) return "fail"
// // //     else if(garde >=33 && garde<= 59 ) return "C"
// // //     else if(garde >=60 && garde<= 79 ) return "B"
// // //     else if(garde >= 80 && garde <= 89 ) return "A"
// // //     else  return "A+"

// // // }

// // // console.log(getGrades(40));

// // // // Rock paper scissors Logic

// // // function logic(user, comp){
// // //     if(user === comp) return `${user} Wins`

// // //     if(user === "rock" && comp === "scissors" || user === "scissors" && comp === "paper" || user === "paper" && comp === "rock" ) return `${user}  :User Wins`;

// // //     return `${comp} : Computer Wins`
// // // }

// // // console.log(logic("rock", "paper"));

// // // // switch (key) {
// // // //     case value:

// // // //         break;

// // // //     default:
// // // //         break;
// // // // }

// // // // Loops

// // // // for (let i = 1; i <= 10; i++) {
// // // //     console.log(i);
// // // // }

// // // // let a =10;

// // // // while(a>=1){
// // // //     console.log(a);
// // // //     a--

// // // // }

// // // // for (let i = 1; i <= 20; i++) {
// // // //     if (i%2 === 0) {
// // // //         console.log(`Even Number :${i}`);
// // // //          }
// // // // }

// // // // let j =1;

// // // // while(j<=15){
// // // //     if (j%2 !== 0) {
// // // //         console.log(j);

// // // //     }
// // // //     j++
// // // // }

// // // // for (let i = 1; i <= 10; i++) {
// // // //     console.log(5*i);

// // // // }

// // // // let i = 1;
// // // // while (i<=10) {
// // // //     console.log(i*5);
// // // //     i++

// // // // }

// // // // let sum = 0
// // // // for (let i = 1; i <= 100; i++) {
// // // //     sum+=i

// // // // }
// // // // console.log(sum);

// // // // let a = 1;
// // // // let b = 0;

// // // // while (a<=100) {
// // // //     b+=a
// // // //     a++

// // // // }
// // // // console.log(b);

// // // // let a =1;
// // // // while (a<=50) {
// // // //     if (a%3 === 0) {
// // // //         console.log(`Number Divisible by 3 : ${a}`);

// // // //     }
// // // //     a++

// // // // }

// // // // let ask = prompt('Enter Starting number')
// // // // let end = prompt('Enter Ending number')

// // // // for (let  i= ask; i <= end; i++) {
// // // //     if (i%2 === 0) {
// // // //         console.log(`${i} is Even number`);

// // // //     }else{
// // // //         console.log(`${i} is Odd Number`);

// // // //     }

// // // // }

// // // let count =0;

// // // let a =1;

// // // while (a<=100) {
// // //     if (a%3 === 0 && a%5 ===0) {
// // //         count++

// // //         console.log(a);

// // //     }
// // //              a++

// // // }

// // // console.log(`Total count : ${count}`);

// // // for (let i = 1; i <= 100; i++) {
// // //         console.log(i);

// // //     if (i%7 ===0) {
// // //         break;

// // //     }

// // // }

// // // for (let i = 0; i < 20; i++) {
// // //     if (i%3 ===0) {
// // //         continue

// // //     }
// // //     console.log(i);

// // // }

// // // let ct = 0

// // // for (let i = 1; i <=100; i++) {
// // //     if (i%2 !== 0 ) {
// // //         ct++
// // //         console.log(i);

// // //     }
// // //     if (ct >=5) {
// // //         break;

// // //     }

// // // }

// // // ----------------------------------------------------------->        Functions      <----------------------------------------------------------------------- //

// // let user = (function(){
// //     let username = "We are using IIFE to craete private Variables that can only be accessed by name of the function";
// //     return{
// //         getUsername: function(){
// //             console.log(username);

// //         },
// //         UpdateUsername: function(upadate){
// //             username = upadate
// //         }

// //     }
// // })()

// // let multiply = (a,b)=>{
// //     console.log(`muliply : ${a * b}`);

// // }
// // multiply(5,8)

// // function check(age){
// //     if(age < 18) return "Childrens";
// //     if(age > 18) return "Allowed"
// // }
// // console.log(check(50));

// // function outer(value){
// //     value()

// // }
// // outer(function(){
// //     console.log('Hello from Argument Function');

// // })

// // // Functions declaration , expression , and arrow Function

// // // Normal function

// // function normalFunction(Parameter) {
// //     console.log("Just a normal function");

// // }
// // normalFunction()

// // // function expressions

// // let funcExpress = function(){
// //     console.log("Function expression");

// // }

// // funcExpress()

// // //Arrow Function

// //  let variable = ()=>{
// //     console.log("Arrow function");

// //  }
// //  variable()

// // // Parameter Vs Arguments

// // function add(value1 , value2) { // value inside add here is parameter
// //     return value1 ** value2

// // }

// // console.log(add(2,7)) // Value inside add() is Arguments

// // //=====================================================================================================================================================================//

// // // Default , rest and Spread

// // //Default

// // function sub(params = 0,paramrs2 = 0) {
// //     console.log(paramrs2 , params);

// // }

// // sub() // this is print undefined because we have not given any values to the parameters in sub() so for this scenerio we can give parameters a default variables

// // // Rest operator

// // function name(...params) {
// //     console.log(params);

// // }
// // name(2,4,3,6,6,3,7,5,2,5,) // when we multiple arguments we can use rest operator (...) in parameters in functions it prints agruments in an array format

// // // Spread operator (...)

// //  // Same as rest operator but used in arrays and objects

// // //=====================================================================================================================================================================//

// // // Return values and early returns

// // function Return(params) {
// //     return 33*params

// // }
// // let value = Return(43);
// // console.log(value);   // return and early return when we want to return a value and not directly print the value . it returns values and that value can be stored and used in variables just like this and return makes sure that code will stop execution when it encounters return

// // // Early return when when we want to stop execution of code  when coditon is fulfilled ex: if-else statement

// // //=====================================================================================================================================================================//

// // //First class Functions (assign to variables, pass as arguments, return from Other function)

// // // in JS functions can be treated as a value just like other values

// // function mult(params) {
// //     params()

// // }
// // mult(function(){
// //     console.log(5*45);

// // })  // This is First class function in here we can use functions just like other values we can store it in a variable or used as a agruments

// // //=====================================================================================================================================================================//

// // // Higher-order Function

// // // Ek function jo return kaare ek function ya fiir uska parameter mai function usse kahate hai Higher Order Function  // Ya fir Dono kaare tab

// // function Hof(params) {
// //     params()

// // }
// // Hof(function(){console.log("Example of higher order function");})  // Higher order function

// // //OR

// // function HigherOrder(){
// //     console.log("hello Inner Function . I am Outer Function");

// //     return function(){
// //         console.log('Higher Order function inside Function  using return and Hello outer Function');

// //     }

// // }
// // HigherOrder()() // it requires ()() to execute function inside return first () is for execution of main function an second () is for return function // other wise return function will not execute

// // //=====================================================================================================================================================================//

// // //Pure Vs Impure Functions

// // //Pure function

// // // pure function are those function that does not changes values of variables created  outside the function or Updates the values of increments or Decrements values

// // let pure = 45
// // function Pure(){
// //     console.log(pure); // here in this function  it is just printing the value not changing

// // }

// //  // Impure Functions

// //  // In impure Function it changes the value created outside the function

// //  let impure = 38;
// //   function Impure(){
// //     impure++ // here it is Updating the value inside the function So It is Impure
// //   }

// // //=====================================================================================================================================================================//

// // // Closures And Lexical scoping

// // // CLOSURE

// //   // In Closures When a function returns another Function which is using the values or a single variable created in the parent function then it is know as Closures

// //   function Closures() {
// //     let a = 46;
// //     return function(){
// //         let b = 50;
// //         console.log(a+b);
// //     }
// //   } // here we are using variable created in parent function in return function So it is Closures.

// // //=====================================================================================================================================================================//

// //   // Lexical scoping

// //   // Lexical scoping in which Multiple chain of function is created inside another Function

// //   function Lexical(){
// //     let a =49;
// //     function chain1(){
// //         let b =96;

// //         function chain2(){
// //             c = 70
// //         }
// //     }
// //   } // In this chain of functions childrens of parent function can access parent function variables but Parent Function cannot access vaiables craeted inside Childrens function variables . And This Applies for all the function that has craeted  another function .

// // //=====================================================================================================================================================================//

// // //IIFE (Immediately Invoked Function Expressions)

// // // In (Immediately Invoked Function Expressions) function is directly execute

// // (function(){
// //     console.log("This Is IIFE (Immediately Invoked Function Expressions)  ");

// // })() // This Function will directly execute

// // //=====================================================================================================================================================================//

// // // Hoisting Difference between declaration and expression

// // // Function delcretion or function statement  can be Hoisted
// // Hoist()

// // function Hoist() {
// //     console.log(" Function delcretion or function statement  can be Hoisted  ");

// // }

// // //=====================================================================================================================================================================//

// // // Function expression  cannot be Hoisted

// // // hoist() // This is Give (Uncaught ReferenceError: Cannot access 'hoist' before initialization) because we are using let and variable so it cannot be hoisted .

// // // // if we use var than (hoist is not a function ) will occur as an error

// // // var hoist = function(){
// // //     console.log("Function expression  cannot be Hoisted   ");

// // // }

// // //=====================================================================================================================================================================//

// // // This Context in both regular function and Arrow function

// // //  This Context in regular function

// // //=====================================================================================================================================================================//

// // // This Context in Arrow function

// // //=====================================================================================================================================================================//

// // // function Hoisting and TDZ

// // //=====================================================================================================================================================================//

// // // Scope Chains and Closures Traps

// // // func

// // // Dicount
// // function discount(dic){

// //     return function(price){
// //         return price - price* dic/100
// //     }

// // }
// // console.log(discount);

// //  let discountt = discount(20)
// //  let discounttt = discount(50)

// //  console.log(discountt(400));
// //  console.log(discounttt(3400));

// // // Counter

// // function counter(){
// //     let count = 0;
// //     return function(){
// //         count++;
// //         return count
// //     }
// // }

// // let count = counter()
// // console.log(count());
// // console.log(count());
// // console.log(count());
// // console.log(count());
// // console.log(count());

// // // IIFE  programm to islolate a variable

// // let IFE = (function(){
// //     let level = 1;
// //     return {
// //         levelUp: function(){
// //          level++
// //         },
// //         getLevel: function(){
// //             return level

// //         }
// //     }
// // })()

// // // ----------------------------------------------------------->        Arrays      <----------------------------------------------------------------------- //

// // // Array methods :

// //        let array = [4,6,3,6,3,6,2,5,2,6,2,4]

// //          //  push is used to push value inside an  array

// //           array.push({id:1, name:"sujit"})
// //           array.push({id:2, name:"sk"})

// //           //  pop is used to delete last emelent from the array

// //            array.pop()

// //           // slice  is used when we want to create a new array from from the data of another array or some part of the array
// //           // it will go from starting number  to previous to  end element in an array

// //           let slice = array.slice(1,6) // ans : (5) [6, 3, 6, 3, 6]

// //           // Splice it chages the main array elements or delete the elements from the array

// //           array.splice(1,4) // ans:  (9) [4, 6, 2, 5, 2, 6, 2, 4, {…}]

// //           // shift removes elements from the first index

// //           array.shift() // (8) [6, 2, 5, 2, 6, 2, 4, {…}]

// //           //  Unshift add an elements to the first index or 0 th index of the array

// //           array.unshift(89)

// //           // reverse it reverses the elements in an array

// //           array.reverse()

// //           // sort using .sort we can sort arrray array ascending or descending order

// //           array.sort((a,b)=>{
// //             return a -b

// //           }) // For acending order

// //            array.sort((a,b)=>{
// //             return b -a

// //           }) // For descending order

// //           //  map  using map we can create another array with same data from one array.

// //           let mapp = array.map((value)=>{
// //             return value**4
// //           })

// //           // filter is used to filter out  elements like if filter if an element is greater than 3

// //           let filte = array.filter(( value)=>{
// //             return value >3
// //           })

// //           // reduce is used to reduce elemnets into one elements like adding them together or sum of numbers or multiply the elemenets in the array

// //           let red = array.reduce((acc,val)=>{
// //             return acc+val
// //           },0)

// //           //Find  is use to find if the element is present or not if the element is present it will print true

// //           let find = array.find((value)=>{
// //             return value > 10;

// //           })

// //           //Some checks if the some or one  elements fullfills the conditions true or not

// //           let some = array.some((value)=>{
// //             return value%2 ===0 ;

// //           })

// //           // Every checks if every  elements fullfills the conditions true or not

// //           let every = array.every((value)=>{
// //             return value >3

// //           })

// //    // Destructuring

// //    let arr =[5,7,4,6,3,6,3,3]

// //    let [a,b,c,,e] = arr // it will destructure the elements from the array and save them in new variable a , b, c ,e

// //    // Spread Operator  it is used to make Copy of the Original array that is not Nested

// //    let arr1 = [46,666,54,4,5,3,64,464]

// //    let arr2 = [...arr1]

// //    // insert elements in 2nd index of the array

// //    let arr3 = ["apple","mango","banana","Kiwi"]
// //    // for the we can use splice method to insert in one postion

// //    // here first we will select index and second we will select how many elements we want to remove (but in this case we don't want to so 0) and write the Elments we want to add in an array

// //    arr3.splice(2,0 ,"orange","Tomato")

// // // let key = Number(prompt("enter day"))

// // //    switch (key) {
// // //     case 1:console.log("Sunday");

// // //         break;
// // //         case 2:console.log("Monday");

// // //         break;
// // //         case 3:
// // //             console.log("Tuesday");

// // //         break;
// // //         case 4:
// // //             console.log("Wednesday");

// // //         break;
// // //         case 5:
// // //             console.log("Thursday");

// // //         break;
// // //         case 6:
// // //             console.log("Friday");

// // //         break;
// // //         case 7: console.log("Saturday");

// // //         break;

// // //     default: console.log("Invalid day");

// // //         break;
// // //    }

// // // let age = Number(prompt("enter Age"))

// // // if (age < 18) {
// // //     console.log('Not Eligible for Voting')

// // // }
// // // else{
// // //    console.log("Eligible for voting");

// // // }

// // // let temp = Number(prompt("enter temp"))

// // // temp >30 ? console.log("Hot")
// // //  :console.log("Plesent");

// // // let marks = Number(prompt("enter Marks"))
// // // marks > 35? console.log("Pass"):console.log("Fails");

// // // let city = prompt("Enter City");

// // // if (city === "Assam") {
// // //     console.log("Guwahati");

// // // }else if(city === "Delhi"){
// // //     console.log("Capital");

// // // }else{
// // //     console.log("Unknown City");

// // // }

// // // Use .map() to square each number

// // // let arra1  = [3,5,6,4,6,35]

// // // let arra2 = arra1.map((val)=>{
// // //     return val**2
// // // })

// // // // console.log(arra2);

// // // let filt = arra1.filter((val)=>{
// // //     return val >10
// // // })

// // // let redu = arra1.reduce((acc,curr)=>{
// // //     return acc+curr
// // // },0)

// // // let findd = arra1.find((value)=>{
// // //     return value > 5

// // // })

// // // let somme = arra1.some((value)=>{
// // //     return value < 12
// // // })

// // // let everyy = arra1.every((value)=>{
// // //     return value%2=== 0
// // // })

// // // destructure an array to find firstname and lastname and save both of them in different array

// // // let arra = ["Sujit","Kumar"];
// // // let [Firstname,Lastname] = arra;

// // Add India to the start of the Array

// // let countries = ["Russia","Afganistan"]
// // countries = ["India",...countries]

//  // ----------------------------------------------------------->        Objects      <----------------------------------------------------------------------- //

//  // Key-value structure

//   // it is just  name: "Sujit" -> here name is the key and "Sujit" here is Value

//   let obj = {
//     name:"Sujit",
//     age:21

//   }

//  // Dot vs brackets notation

//   // In Objects  we can can access values with two ways

//      // Dot

//       console.log(obj.name) // this is Dot Notation

//     console.log(obj["age"]) // Bracket notation

//     // Nesting and deep access

//     let user = { // Nested object
//         name:"Sujit Kumar",
//         age:21,
//         address: {
//             City: "Guwahati",
//             location:{
//                 lat:59.8,
//                 lon:79.6
//             }

//         }

//     } // deep access

//     user.address.location  // or we can Use Optional chaining
//     user?.address?.location  // using optional chaining we can access keys and their values but if there keys doest not exists than it will simply print undefined

//   //Objects Destructuring

//   let userDetails = {...user} // or

//   let {name , age} = user // we can use this technique for destructuring

//  //Looping  :

//       // for-in loop

//       // we can use for-in loop for Objects

//        for(let key in obj){
//           console.log(obj[key]); // or  // this will give only value
//           console.log(key); // or  // this will give only key
//           console.log( obj,obj[key]); // This is give us both key and value of the object;

//        }

//     // Object.keys

//      console.log( Object.keys(obj)) // this will create array of objects

//      // (2) ['name', 'age']
//      // 0: "name"
//      // 1: "age"
//      // length: 2

//   // Objects.entries

//   // This will creates entries in array format  for one key value pair one array and for another key value pair another array

//   // like this :  [Array(2), Array(2)]
//     // 0: (2) ['name', 'Sujit']
//     // 1: (2) ['age', 21]

//  console.log( Object.entries(obj))

// // Cpoying Objects :

//           // Spread  using spread ... we can create copy of the objects but it does not make copy of nested objects

//           let obj1 = {...obj}
//           console.log(obj1);

//           // Objects.assign

//           // it is also used to make copy of the object

//           let assignn = Object.assign(user)

//           // Deep copy   is used to make deep copy of objects whether it is nested or not

//           let nestedObj = JSON.parse(JSON.stringify(user)) // this will create deep copy of the objects

// // Optional Chaining

// user?.address?.location  // using optional chaining we can access keys and their values but if there keys doest not exists than it will simply print undefined

// // Computed properties   is used to give key and value from the variable to the objects that is created

// //example :

//  let role = "Admin";

//  let deatils = {
//     name:"user",
//     age:null,
//     [role]:"user"

//  }
//  console.log(deatils);

// // Practice

//   // Craete an Object for a students with name , age ,is enrolled

// //   let Students = [
// //     {
// //         name:"Sujit",
// //         age:21,
// //         isEnrolled: true
// //     },
// //     {
// //         name:"Meow",
// //         age:2,
// //         isEnrolled: true
// //     },
// //     {
// //         name:"Ajit",
// //         age:18,
// //         isEnrolled: true
// //     },
// //     {
// //         name:"LittleMeow",
// //         age:null,
// //         isEnrolled: false
// //     },
// //     {
// //         name:"Jr.Meow",
// //         age:null,
// //         isEnrolled: false
// //     },
// //   ]

// //   Students.forEach((val)=>{
// //     for(let key in val){
// //         console.log(`${key}:${val[key]}`);

// //     }
// //   })

// // can any object key be Number or Boolean or Strings

// const obj3 = {
//     true:"Yes",
//     54:"Ans"
// }

// console.log(obj3[true]); // Yes Number and Boolean can be used as a Key in Objects

//  // Destructure the key "first-name" as a variable firstname.

//  const users = {
//     "First-name":"Sujit"
//  }
//  let {'First-name' : firstName} = users

//  // here we are accessing First-name value in users and desctruturing it and creating a variable firstName to store it as string cannot be used to store data.

//  // use Objects.entries() to print all key value pair

//  const course = {
//     title:"JavaSvript",
//     duration:"4 Weeks"
//  }

//  Object.entries(course).forEach((value)=>{
//     console.log(`${value[0]} : ${value[1]}`);

//  })

// let Count = 1;
// let Amount = 1000;

// while(Count <=3){
//    let Input = prompt("Enter Amount");

//    let Withdraw = Number(Input)

//    if (Input === null ) {
//       console.log("Canceled");
//       break;

//    }else if(isNaN(Withdraw)){
//       console.log("Please Enter Valid Number");
//    }else if(Input.trim()=== ""){
//       console.log("Empty");

//    }else if(Withdraw <0){
//       console.log("Enter Valid Number Not Negative");

//    }

//    else if (Withdraw <= Amount) {
//       Amount = Amount-Withdraw;
//       console.log("Deducted");
//    }else{
//       console.log("Insufficient balance");

//    }
//     Count++

// }

// console.log(`Transaction Limit Reached Your Final Balance : ${Amount}`);

// Js Questions

function AskPassword() {
  // 11. Allow only 3 attempts to enter correct password
  //If user gets it right early, stop. If not → “Account locked”

  let attempts = 0;
  let ptompt;
  let password = "password";

  while (attempts <= 3) {
    ptompt = prompt("Enter Password");

    if (ptompt === null) {
      console.warn("Cancelled");
      break;
    }
    if (ptompt.trim() === "") {
      console.log("Empty");
      break
    } else {
      if (attempts === 3) {
        console.error("Account Locked");
      } else if (ptompt === password) {
        console.log("Correct Password");
        break;
      }else{
        console.log('Incorrect Password');
        
      }
    }
    attempts++;
  }
}

function AskStop() {
  let count = 0;

  let promt = prompt("Enter Word");

  let Word = "Stop";

  while (promt !== Word) {
    promt = prompt("Enter Word");
    if (promt === "yes") count++;        
  }

  console.log(`Count of yes : ${count}`);
}

function Seven() {
  for (let i = 1; i <= 50; i++) {
    if (i % 7 === 0) {
      console.log(`Numbers Divided By 7 is :${i}`);
    }
  }
}

function OddSum() {
  sum = 0;
  for (let i = 1; i <= 30; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }

  console.log(`final sum :${sum}`);
}

function EvenNUmber() {
  let Prompt;

  while (Prompt % 2 !== 0) {
    Prompt = prompt("Enter a Number");

    if (Prompt === null) {
      console.warn("Cancelled");
      break;
    }
    if (Prompt.trim() === "") {
      console.warn("Empty"); 
    }
    if (isNaN(Prompt)) {
      console.error("IsNot A Number");
      break;
    } else {
       Prompt = Number(Prompt);
      if (Prompt % 2 === 0) {
        console.log("You have Entered Even Number : " + Prompt);
        break;
      }
    }
  }
}

function UserInput() {
  let Start = Number(prompt("Enter Start Number"));

  let end = Number(prompt("Enter End Number"));

  if (Start > end) {
    console.error(`Your Start value is :${Start} and end value :${end} Try with give Bigger End Number`);
  }else{
  while (Start <= end) {
    console.log(Start);
    Start++;
  }
}
}

function AskFiveNums() {
  let count = 0;
  let start = 0;

  let Prompt = prompt("Enter A Number");
  start++

  while (start !== 5) {
   let nums = prompt("Enter A Number");
    if (Prompt === null) {
      console.warn("Cancelled");
      break;
    }
    if (Prompt.trim() === "") {
      console.log("Empty");
      break;
    }
     nums = Number(Prompt);
    if (isNaN(nums)) {
      console.error("Not A Number");
      break;
    }
    if (nums >= 0) {
      count++;
    }
    start++;
  }
  console.log(`Count of Positive Numbers : ${count}`);
}

function ThreeOddNumber() {
  let count = 0;

  for (let i = 0; i <= 20; i++) {
    if (i % 2 !== 0) {
      console.log(i);

      count++;
    }
    if (count >= 3) {
      break;
    }
  }
}

function ATMSimulator() {
  let maxWithdraw = 3;
  let Balance = 1000;

  let WithDraw = 0;

  while (WithDraw !== maxWithdraw) {
    let Prompt = prompt("Enter Amount");
    if (Prompt === null) {
      console.warn("Cancelled");
      break;
    }
    if (Prompt.trim() === "") {
      console.log("Empty");
      break;
    }
    let nums = Number(Prompt);
    if (isNaN(nums)) {
      console.error("Not A Number");
      break;
    }
    if (nums < 0) {
      console.log("Number Must be Greater Than Zero");
    } else {
      if (Balance < nums) {
        console.log("Insufficient balance");
        break;
      } else {
        Balance -= nums;
        console.log(`${nums} : Deducted From Current Balance `);
      }
    }
    WithDraw++;
  }

  console.log(`Current Balance is :${Balance}`);
}

// ATMSimulator()
// ThreeOddNumber()
// AskFiveNums()
// UserInput()
// EvenNUmber()
// AskStop()
// AskPassword()




// LERNOVA  : Sheryians Data Science and Anylatics Coupon Code



// Write a higher-order function `runTwice(fn)` that takes another function and executes it two times.

function higher(func){
  func()
  func()
  
}

 higher(function(){
  console.log('argument function');
  
})



function pure(value){
  return value*value
  
}
console.log(pure(4))


let count = 9;

function impure(){
  return count**count
}

console.log(impure());


let obj = {
  name:"Sujit",
  age:21
}

function objdest({name,age}){
  let Username = name;
  let Userage = age
 console.log(`Username : ${Username} , Userage : ${Userage}`);
 

}
objdest(obj)



// let Userobj = {
//   user : {
//     address : {
//       city: "Guwahati"
//     }
//   }
// }

// console.log(Userobj?.user?.address?.city)

// Object.seal(Userobj)
// Userobj.user.name = "Sujit"
// Userobj.user.address.city = "hello world"
// console.log(Userobj?.user?.address?.city)


let nesobj = {
  user:"Sujit",
  address: {
    city: "Guwahati",
  }
}

// Object.freeze(nesobj)
// Object.seal(nesobj)


let arr = [1000,2000,3000,53,43,53,3,6,3,7,2,7,9,0]

let newarr =  arr.map((value)=>{
  return value**2
})


let obj1 = {
  name:"Sujit",
  age:21,
  address:{
    city:"Guwahati"
  },
  fnc : function(){
    console.log(this);
    function hello(){
      console.log(this);
      let func2 = ()=>{
        console.log(this);
        function hello2(){
          console.log(this);
          
        }
        hello2()
        
      }
      func2()


      
    }
    hello();

    let func = ()=>{
      console.log(this);
      let func2 = ()=>{
        console.log(this);
        
      }
      func2()
      
    }
    func()
    
  },
  fnc1: ()=>{
    console.log(this);
    function hell(){
      console.log(this);
      let func = ()=>{
        console.log(this);
        function hello4(){
          console.log(this);
          
        }
        hello4()
        
      }
      func()
    }
    hell()
    

  }
}



function destr({name ,age}){
  return {name,age};
  

}
console.log(destr({name:"Sujit",age:21}))



function msgdelay(msg , time){
  setTimeout(()=>{
    console.log(msg);
    

  },time)
}
msgdelay("hello",3000)




function higher(fun ,n){
  for (let i = 0; i < n; i++) {
  fun()    
  }


}
higher(()=>{
  console.log("hello");
  
},4)



function createCounter(){
  let counter = 0;
  return function(){
    counter++
    return counter;
    
  }
}

let Fnc = createCounter()
console.log(Fnc())



function createUser(name){
  return function(){
    let view  = (name)=>{
      console.log(name);
      

    }
    let update = (name)=>{
      

    }
  }
}