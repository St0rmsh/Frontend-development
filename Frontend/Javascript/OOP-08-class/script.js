// class Class8 {
//     constructor(name , age , gender) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
//     talk(){
//         console.log("can talk ");

//     }
//     walk(){
//         console.log("maybe");

//     }
// }

// let stu1 = new Class8("storm", 21 , "M")
// let stu2 = new Class8("tamor", 25 , "M")

// Create a user object that stores name and email and has a login method which prints "User logged in".

class Users {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  isLoggedin() {
    console.log(`${this.name} is Logged in`);
  }

  set(value) {
    if (typeof value === "string") {
      this._name = value;
    } else {
      console.error("Enter valid type of data");
    }
  }
  get() {
    return `${this._name}-${this._age}`;
  }
}

let user1 = new Users("Sujit", 21);
let user2 = new Users("Storm", 25);
let user3 = new Users("Shadow", 27);

class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
  drive() {
    return this.brand + " - " + this.speed;
  }
}

let breeze = new Car("BMW", "250Kmph");
let lowlife = new Car("Ferreri", "300Kmph");

class Students {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  set name(value) {
    if (typeof value !== "string") {
      console.error("Invalid DataType");
      return;
    } else {
      this._name = value;
    }
  }
  get name() {
    return this._name;
  }
}

let stu1 = new Students("Sujit", 21);

// LEVEL 1 — Easy (Basics of Classes & Getters/Setters)
// Q1. Create a Person class with getters and setters for name and age. Validate age > 0.
// Q2. Create a Rectangle class with getter area that returns length × width.
// Q3. Create a Car class with private field #speed. Add methods to accelerate and brake.
// Q4. Create a BankAccount class with:

// private #balance

// method deposit(amount)

// method withdraw(amount) (should not allow overdraft)

// Q5. Create a User class that stores a username and password (private). Add a getter that returns only username, not password.
// 🟨 LEVEL 2 — Intermediate (Validation + Encapsulation + Logic)
// Q6. Create a CartItem class:

// name

// price

// quantity

// getter totalPrice = price * quantity

// Q7. Create a Student class with private #marks. Getter should return:

// "A" if marks ≥ 90

// "B" if marks ≥ 75

// "C" if marks ≥ 50

// "F" otherwise

// Q8. Create a Temperature class:

// store Celsius internally

// getter fahrenheit

// setter fahrenheit(value) should convert and update Celsius

// Formula: F = C × 9/5 + 32

// Q9. Create a Counter class using private #count. Provide methods:

// increment()

// decrement()

// reset()

// getter value

// Q10. Create a Playlist class:

// private songs array

// method to add song

// method to remove song

// getter totalSongs

// 🟦 LEVEL 3 — Async/Await (API simulation + delays)
// Q11. Create a function getUserData() that returns user info after 2 seconds using async/await + setTimeout.
// Q12. Create an async function fetchWeather(city)

// Simulate fetching weather using a Promise that returns random temp after 1 second.

// Q13. Create a Database class with async method connect()

// Should take 2 seconds

// Log "Database connected"

// Q14. Create an async function downloadFile(url)

// Takes random 1–3 sec

// Resolve "Downloaded"

// Use async/await

// Q15. Create an async getPosts() function that:

// waits for 1 sec

// returns an array of posts

// call it using async/await

// 🟪 LEVEL 4 — Classes + Async/Await Together (ADVANCED)
// Q16. Create a UserService class with:

// async fetchUser(id) → resolves after 2 sec

// async saveUser(obj) → resolves after 1 sec

// Use async/await in both

// Q17. Create a ProductAPI class with private #products array

// Methods:

// async getAll() (delay 1 second)

// async add(product)

// async delete(name)

// Q18. Create a Queue class with async process()

// private queue array

// process items with 1-sec delay each

// Q19. Create a Cache class

// private #store = {}

// async set(key, value) (delay 500ms)

// async get(key) (delay 300ms)

// Q20. Build an AuthSystem class using async:

// async login(username, password)

// resolve if username === "admin" && password === "1234"

// else reject

// add private #loggedIn = false

// // //   Your Tasks (Q1 – Q5)
// // Q1. Person Class

// // Create a Person class with:

// // name

// // age (must be > 0)

// // getters + setters

// // Q2. Rectangle Class

// // Create a Rectangle class with:

// // length

// // width

// // getter area → return length × width

// // Q3. Car Class with Private Field

// // Create a Car class with:

// // private #speed

// // accelerate(amount)

// // brake(amount) (must not go below 0)

// // getter speed

// // Q4. BankAccount

// // Create a BankAccount class with:

// // private #balance

// // deposit(amount)

// // withdraw(amount) (no overdraft allowed)

// // getter balance

// // Q5. User Class

// // Create a User class with:

// // private username

// // private password

// // getter only for username

// // no getter for password

// //Q1 — Person Class (Validation + Encapsulation)

// Create a class named Person that stores a person’s name and age.

// Requirements:

// The class must accept name and age in the constructor.

// Use getters and setters for both fields.

// The age setter must validate:

// Age must be a positive number (> 0)

// If invalid, throw an error or print an error

// The name should be a non-empty string (you may validate it).

// Expected behavior:
// const p1 = new Person("Sujit", 21);
// console.log(p1.name); // "Sujit"
// p1.age = -5;          // Error: Invalid age

function firstQuestion() {
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    set age(value) {
      if (value < 0 || typeof value !== "number" || value === null) {
        console.error("Invalid");
        return;
      } else {
        this._age = value;
      }
    }

    set name(value) {
      if (typeof value !== "string") {
        console.error("Invalid ");
        return;
      }
      value = value.trim();

      if (value.length <= 3 || value === null) {
        console.error("Name should be more than 3 letters");
        return;
      }

      this._name = value;
    }

    get name() {
      return this._name;
    }
    get age() {
      return this._age;
    }
  }

  let person1 = new Person("Suji", 21);
}

// ✅ Q2 — Rectangle Class (Computed Getter)

// Create a Rectangle class that represents a rectangle’s dimensions.

// Requirements:

// The class must accept:

// length

// width

// Must include:

// Getter for length

// Getter for width

// Add a computed getter called area

// It should return length × width

// No setter required unless you want to add validation.

// Expected behavior:
// const r = new Rectangle(5, 10);
// console.log(r.area); // 50

function questionRecatngle() {
  class Rectangle {
    constructor(length, width) {
      this.length = length;
      this.width = width;
    }
    get area() {
      return this.length * this.width;
    }
  }

  let first = new Rectangle(30, 40);
  console.log(first.area);
}

// ✅ Q3 — Car Class (Private Fields + Methods)

// Create a Car class that tracks speed using a private variable.

// Requirements:

// Use a private field named #speed (starts at 0 by default).

// Add a method accelerate(amount):

// Increase speed by the given amount.

// Amount must be positive.

// Add a method brake(amount):

// Reduce speed by the given amount.

// Speed must never go below 0.

// Add a getter speed to read the current speed.

// Expected behavior:
// const c1 = new Car();
// c1.accelerate(20);
// console.log(c1.speed); // 20
// c1.brake(30);
// console.log(c1.speed); // 0 (not negative)

// class Cars {
//     #speed =0;
//     constructor(speed){
//         this.#speed ;
//         this.accelerate = speed

//     }

//      accelerate(amount){
//         if (amount 0) {
//          this.#speed+=amount

//         }
//         else{
//             console.error("Invalid");

//         }

//     }
//      Brake(amount){
//          if (amount >=0) {
//          this.#speed-=amount

//         }
//          else{
//             console.error("Invalid");

//         }

//     }

//      Speed(){
//         return this.#speed
//     }
// }

// let car1 = new Cars()

// ✅ Q4 — BankAccount Class (Encapsulation + Validation)

// Create a BankAccount class that manages deposits and withdrawals.

// Requirements:

// Store the balance in a private field #balance

// Start with an initial balance from the constructor.

// Create method deposit(amount):

// Amount must be positive

// Add to balance

// Create method withdraw(amount):

// Amount must be positive

// Cannot withdraw more than the balance (no overdraft)

// Create getter balance to read the current balance.

// Expected behavior:
// const acc = new BankAccount(1000);
// acc.deposit(500);
// console.log(acc.balance); // 1500
// acc.withdraw(2000);       // Error: Insufficient funds

function BankAccount() {
  class BankAccount {
    #balance;
    constructor(initialbalance) {
      if (
        typeof initialbalance !== "number" ||
        initialbalance < 0 ||
        Number.isNaN(initialbalance)
      ) {
        throw new Error("Invalid initial Balance");
      }
      this.#balance = initialbalance;
    }

    deposit(amount) {
      if (typeof amount !== "number" || Number.isNaN(amount) || amount <= 0) {
        throw new Error("invalid deposit amount");
      }
      this.#balance += amount;
      return `${amount} ruppes Despoited`;
    }
    withdraw(amount) {
      if (amount <= 0 || typeof amount !== "number" || Number.isNaN(amount)) {
        throw new Error("invalid Withdrawal amount ");
      }
      if (this.#balance < amount) {
        throw new Error("Insufficient funds");
      }
      this.#balance -= amount;
      return `${amount} ruppes Withdrawn`;
    }
    get balance() {
      return this.#balance;
    }
  }

  let account1 = new BankAccount(4000);
}

// ✅ Q5 — User Class (Private Sensitive Data)

// Create a User class that stores username and password securely.

// Requirements:

// Store both fields as private fields:

// #username

// #password

// Constructor should accept both fields.

// Create a getter for:

// username ✔ allowed

// DO NOT create a getter for:

// password ❌ (never expose password)

// No validation required, but you may add it.

// Expected behavior:
// const u = new User("storm", "secret123");
// console.log(u.username); // "storm"
// console.log(u.password); // ❌ ERROR (should not exist)
// //
function Userss() {
  class User {
    #username;
    #password;
    constructor(username, password) {
      if (typeof username !== "string" || username.trim().length <= 3) {
        throw new Error("Invalid User name");
      }
      if (typeof password !== "string" || password.trim().length <= 3) {
        throw new Error("Invalid Password");
      }

      this.#username = username;
      this.#password = password;
    }
    get username() {
      return this.#username;
    }
  }

  let firstuser = new User("Sujit", "Sujit@123");
}

// Q1 — Product Inventory System (Classes + Getters/Setters)

// Create a Product class with:

// name → must be a non-empty string

// price → must be a number ≥ 0

// stock → must be an integer ≥ 0

// Automatic trimming of name

// Prevent setting invalid price or stock (print error instead of assigning)

// Task:
// Create 3 products and update their values using setters.
// Print the final result.
function Products(){
    class product {
  constructor(name, price, stock) {
    if (typeof name !== "string" || name.trim().length <= 3) {
      throw new Error("Invalid Name");
    }
    if (typeof price !== "number" || price < 0) {
      throw new Error("Invalid Price");
    }
    if (typeof stock !== "number" || stock < 0) {
      throw new Error("Invalid stock");
    }

    this.name = name;
    this.price = price;
    this.stock = stock;
  }
  set Name(value) {
    if (
      typeof value !== "string" ||
      value.trim().length <= 3 ||
      value === null
    ) {
      throw new Error("Invalid Name");
    }
    this.name = value;
  }
  set Price(value) {
    if (typeof value !== "number" || value < 0 || value === null) {
      throw new Error("Invalid Price");
    }
    this.price = value;
  }
  set Stocks(value) {
    if (typeof value !== "number" || value < 0 || value === null) {
      throw new Error("Invalid Price");
    }
    this.stock = value;
  }

  get Namedetails() {
    return this.name;
  }
  get Pricedetails() {
    return this.price;
  }
  get Stocksdetails() {
    return this.stock;
  }
}

let dets1 = new product("Sujit",0,0)

}

// ✅ Q2 — BankAccount (Encapsulation + Validation)
// Create a BankAccount class:
// Private properties: _owner, _balance
// Getter for owner and balance
// Setter for balance is not allowed
// Method deposit(amount)
// Method withdraw(amount)
// Reject if insufficient balance
// Validate all operations (typeof === number, no negatives)
// Task:
// Simulate:
// Open an account with ₹500
// Deposit ₹200
// Withdraw ₹900 (should fail)
// Withdraw ₹300 (should succeed)
// Print all steps.

function BankAccounts(){
    class BankAccounts{
    constructor(name,balance){
        if (typeof name !== "string" || name.trim().length <= 3 || name === null) {
            throw new Error("Invalid Name")
        }
         if (typeof balance !== "number" ||  balance === null || balance < 0) {
            throw new Error("Invalid balance")
        }
        this._owner = name
        this._balance = balance
    }
    deposit(amount){
          if (typeof amount !== "number" ||  amount === null || amount <= 0) {
            throw new Error("Invalid amount")
        }
        this._balance+=amount

    }
    withdraw(amount){
         if (typeof amount !== "number" ||  amount === null || amount <= 0) {
            throw new Error("Invalid amount")
        }
        if (amount > this._balance) {
            throw new Error("Insufficient fund")
            
        }
        this._balance-=amount
    }
    set ownerName(value){
        if (typeof value !== "string" || value.trim().length <= 3 || value === null) {
            throw new Error("Invalid Name")
        }
        this._owner = value

    }
    get ownerName(){
        return this._owner
    }
      get balance(){
        return this._balance
    }

}
let account1 = new BankAccounts("Sujit",500)


}







// ✅ Q3 — User Profile Loader (Async/Await + Classes)
// Create a User class with:
// constructor(id)
// async loadProfile()
// → Simulate a server call using await new Promise(...)
// Inside loadProfile, set:
// this.nameP
// this.email
// Getter methods to access name & email
// Task:
// Create a user with id = 101
// Call await user.loadProfile()
// Then print user name & email.
// Simulated server delay: 1–2 seconds.

class User{
    constructor(id){
        this.name 
        this.email

    }
}



function getUserdeatils(address,cb){
  console.log("Fetching address");
  
  setTimeout(()=>{
    cb({lat:4897875,long:3477836})
  },3000)

}
getUserdeatils("Sujitkumar adddress", function(details){
  console.log(details);
})



function getUserdetails(Username , Callback){
  console.log("fetching user deatils");
  let interval = setInterval(()=>{
    Callback( 
      {
        Name:"Sujit",
        Age:21,
        Work:"Unemployed",
      }
      
    )
  },10)
  setTimeout(()=>{
  clearInterval(interval)
  },40)
  

}


getUserdetails("SujitKumar", function(detailsUser){
  console.log(detailsUser);
  

})











function first(fn){
  fn(function(fn2){
    fn2(function(fn4){
      fn4()

    })

  })
}
first(function(fn1){
  fn1(function(fn3){
    fn3(function(){
      console.log("Callback Hell");
      
    })
    
    
  })

})








// ✅ Q4 — Temperature Converter (Getters + Computed Properties)
// Create a Temperature class with:
// Property _celsius
// Getter celsius
// Getter fahrenheit (computed) → c * 9/5 + 32
// Setter fahrenheit(value)
// → Should convert F → C and update _celsius
// Task:
// Create a temperature: new Temperature(0)
// Print both Celsius & Fahrenheit
// Set Fahrenheit to 212
// Print both again (should update Celsius to 100)
class Temperature{
    constructor(Temperature){
        if (typeof Temperature !== "number" || Temperature === null ) {
            throw new Error("Invalid Temperature details")
        }
        this._celsius = Temperature;
    }
    set setFahrenheit(value){
        if (typeof value !== "number" || value === null || value < 0 ) {
            throw new Error("Invalid Temperature details")
        }
        let celsius = (value - 32) * 5/9 
        this._celsius = celsius;
    }
    get Celsius(){
        return this._celsius ;
    }
    get fahrenheit(){
        let fahrenheits = this._celsius  * 5/9 -  32 
        return fahrenheits;

    }

}

let temp1 = new Temperature(-40)






// ✅ Q5 — Async Task Queue (Async/Await + Classes)
// Create a class TaskQueue:
// An array _tasks
// Method addTask(fn) where fn is an async function
// Method async runAll()
// → Runs all tasks in order, using await
// → Each task should log "Running task X"
// Task:
// Add 3 async tasks:
// Task 1 waits 1s
// Task 2 waits 2s
// Task 3 waits 1s
// Run them with:
// await queue.runAll();



class TaskQueue{
    constructor(){
        this.tasks = [] ;
    }
}







class Message{
  constructor(name,UserName,address,email){
    this.name = name;
    this.UserName = UserName;
    this.address = address;
    this.email - email;
    this.role = "User"

  }
  write(text){
    let message = document.createElement('h2')
    message.textContent= text;
    document.body.appendChild(message)
  }
  checkrole(){
    console.log(this.role);
    
  }
}


class Adim extends Message{
  constructor(name,UserName,address,email){
    super(name,UserName,address,email)
    this.role = "Admin"
    

  }
  delete(){
    document.querySelectorAll("h2").forEach((elem)=>{
      elem.remove()

    })

  }
}

let fist = new Message("Sujit","SujitKumar@45","Guwahati","sujitkumar45@gmail.com")
let second = new Message("Su","SujKar@45","UP","sutkar29445@gmail.com")

let Admin = new Adim("Admin","Admin","India","Admin@admin.com")





let pr = new Promise((resolve,reject)=>{
  setTimeout(() => {
    let tando = Math.floor(Math.random()*10)

  if (tando > 5) {
    resolve("Resolved with  "+tando)
    
  }else{
    reject("Rejected with " + tando)
  }
    
  }, 2000);

})

async function AajaLele(Data) {
  try {
    let PE = await pr;
    console.log(PE);
    
    
  } catch (error) {
    throw new Error(error)
    
  }
  
  
  
}
AajaLele()




let pre = new Promise((resolve,reject)=>{

  setTimeout(() => {
    let math = Math.floor(Math.random()*10)


    if (math > 5) {
      resolve(math)
      
    }else{
      reject(math)
    }
    
  }, 2000);
})

pre.then((value)=>{
  console.log(value);
  

})
.catch((value)=>{
  throw new Error(value)
})

async function something(Value) {
  try {
    let newPr = await pre
    console.log(`resloved with ${newPr}`);
    
    
  } catch (error) {
      throw new Error(`rejeted with ${error}`)

    
  }
  
}
something()





