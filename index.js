// const array = {
//     a: 12,
//     b: 'lalala',
//     x: [1, 2, 3, 4, 5, 6],
//     Counter() {
//         return this.x.length
//     },
//     addPoint(a) {
//         this.x.push(a)
//         return this.x
//     },
// }
// console.log(array.Counter())
// console.log(array.addPoint(100))
// console.log(array)

// Constructor down
 
// let dima = new constructor("Dima", 23)
// function constructor(name, age, lvl) {
//     this.name = name,
//     this.age = age,
//     this.lvl = 18
// }

// console.log(dima.name)
// console.log(dima.age)
// console.log(dima.lvl)

// function main() {
//     //используйте номер рейса и его статус
//     var flightNumber = "Air";
//     var flightStatus = "Plane";
//     let age = 12;
//     let lvl = 23;
     
//     var flight1 = new Flight (flightNumber , flightStatus,age,88 );
//     //назначьте объект рейса на переменную flight1
     
//     //выведите результат
//     console.log('The flight ' + flight1.number + ' is ' + flight1.status)
//     console.log(flight1.lvl)
     
// }
 
// function Flight(flightNumber, status,age,lvl) {
//     //исправьте конструктор
//     this.number = flightNumber;
//     this.status = status;
//     this.age = age;
//     this.lvl = lvl;
// };
// main()

// function main() {

//     let did = new Fight (550,23)

//     console.log(did.damage + did.lvl)


//     function Fight(damage, lvl) {
//         this.damage = damage,
//         this.lvl = lvl
//     }
// }
// main()


// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);

// const temps = [{ name: "dima", age: 8, }];
// const a = Object.keys(...temps)
// for( const i of temps) {
//     console.log(a)
// }
// console.log(...temps)

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(scores);
// const worstScore = Math.min(...scores);
// console.log(...scores)


// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores,...secondGroupScores,...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(allScores)


// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings)



// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
  
//  let res = {
//         category : "kyrva",
//         priority,
//         completed,
//         ...data,
        
//     };
//     console.log(res);

//   // Change code above this line
// }
// makeTask({completed:"pidor",category : "sa",lol:";a"})




// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese");



// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`
//   }
//   // Change code above this line
// };
// console.log(bookShelf.addBook("Lol"))
// console.log(bookShelf.updateBook("Lol"))



// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const book = this.books.indexOf(oldName)
//       this.books.splice(book, 1, newName)
//       console.log(this.books)


//     // Change code above this line
//   },
// };
// bookShelf.updateBook("The last kingdom", "Dune")

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     updatePotionName(oldName, newName) {
//         const a = this.potions.indexOf(oldName)
//         this.potions.splice(a, 1, newName)
//         console.log(this.potions)

//     }
// }

// atTheOldToad.updatePotionName("Dragon breath", "Polymorth")





// const atTheOldToad = {
//   potions: [{
//       name: 'Зелье скорости',
//       price: 460,
//     },
//     {
//       name: 'Дыхание дракона',
//       price: 780,
//     },
//     {
//       name: 'Каменная кожа',
//       price: 520,
//     },
//     {
//       name: 'Сок жабы',
//       price: 460,
//     },
//   ],
//     getPotions() {
//         return this.potions;
//     },
//   removePotion(potionName) {
//       const a = this.potions.indexOf(potionName)
//       console.log(atTheOldToad.potions)
//       console.log("Do")
//       console.log(this.potions.name)
//       for (const i of this.potions) {
//           if (potionName === this.potions.name) {
//               this.potions.splice(a, 1)
//               console.log(atTheOldToad.potions)
//               console.log("Posle")
//           }
//       }
//     },
// };

// atTheOldToad.removePotion('Дыхание дракона')






// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// })
// // Change code below this line

// makePizza("Ultracheese",function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`)
// })

// ---------CallBack-----------

// function make(name, call) {
//     console.log(`Хавай ${name}`)
//     call(name)
// }

// make("Peperony",function eath(pizza) {
//     console.log(`Кушай нашу ${pizza}`)
// })



// const pizzaPalace = {
//     pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, onSuccess, onError) {
//         for (const i of this.pizzas) {
//             if (i !== pizzaName) {
//                 return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//             }
//             onSuccess(pizzaName)
//         }
//     }
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError);)
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     value.forEach(function (i) {
//         if (numbers.includes(i)) {
//             filteredNumbers.push(i)
//         }
//     })
//     console.log(filteredNumbers)

// }
// filterArray([1, 2, 3, 4, 5, 6, 12], [1, 2, 3, 6, 9, 12, 4, 8, 1,3])

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   numbers.forEach(function(i) {
//     if (value.includes(i)) {
//       filteredNumbers.push(i)
//     }
//   })
//   console.log(filteredNumbers);
// }
//   filterArray([1, 2, 3, 4, 5, 6], [5, 3, 2, 8, 7, 3, 1, 9, 10, 6]);

// const  changeEven = (numbers, value) => {
//   // Change code below this line
//   const lala = []
//   numbers.forEach(i =>  {
//     if (i % 2 === 0) {
//       lala.push( i + value )
//     }
//   })
//   // Change code above this line
//     console.log(lala)
//     return lala
// }
// changeEven([1, 2, 3, 4, 5], 10)

// function changeEven (numbers, value)  {
//   // Change code below this line
//   let a = []
//   numbers.forEach(i => {
//     if (i % 2 === 0) {
//         i += value
        
//       }
//       a.push(i)
//   })
  
//   // Change code above this line
//     console.log(numbers)
//     console.log(a)
//   return a
// }

// changeEven([1, 2, 3, 4, 5], 10)


// class Car {
//   // Change code below this line
//   constructor(brand, model, price,age) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//     this.age = age
//   }
//   // Change code above this line
    
// }
// const mango = new Car("Mango", "mango@mail.com", 23,2);

// console.log(mango)


// class User {
//   // Деструктуризируем объект
//   constructor({ name, email,l }) {
//     this.name = name;
//       this.email = email;
//       this.l = l
//   }
// }

// const mango = new User({
//   name: "Mango",
//     email: "mango@mail.com",
//   l:"a"
// });

// const opo = new User({
//     name: "lalala",
//     email: "bpbobo",
//     l: "la"
// })
// console.log(mango)
// console.log(opo)

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
//   blacklistedEmails = []

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   // Change code above this line
//   blacklist(email) {
//     return this.blacklistedEmails.push(email)
//   }
//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email)
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true



// class Car {
//     #email
//     constructor({ name, age,email }) {
//         this.name = name
//         this.age = age
//         this.#email = email
//     }
//     geta() {
//         console.log('i`m ' + this.name)
//         console.log('i have ' + this.age + ' yers old')
//     }
//     get email() {
//         return this.#email
//     }
//     set email(a) {
//          this.#email = a
//     }
// }

// const person = new Car({
//     name: 'Dima',
//     age: 23,
//     email:"@lalala"
// })
// console.log(person)
// person.geta()
// console.log(person.email)
// person.email = "aaaaa"
// console.log(person.email)
// console.log(person.name)
// console.log(person.age)
// person.name = "WTF"
// console.log(person.name)




// class User {
//     constructor( name, age ) {
//         this.name = name
//         this.age = age
//     }
//     getName() {
//         return "i`m "  + this.name
//     }
//     getAge() {
//         return "i have " + this.age + ' yers old'
//     }
// }
// class Human extends User {
//     lvl = 0
// }
// const user = new User('Sergei',32)
// const user1 = new Human("Dima", 23)
// console.log(user.name,user.age) //Sergei 32
// console.log(user1.name, user1.age) //Dima 23
// console.log(user.getName(),user.getAge()) //i`m Sergei i have 32 yers old
// console.log(user1.getName(), user1.getAge())//i`m Dima i have 23 yers old
// user1.lvl = 100
// console.log(user1.lvl) //100
// console.log(user) //User { name: 'Sergei', age: 32 }
// console.log(user1) //Human { name: 'Dima', age: 23, lvl: 100 }


// class Car {
//     constructor(name, age, number) {
//         this.name = name
//         this.age = age
//         this.number = number
//     }
//     getNumber() {
//         return this.number
//     }
//     changeNumber(newNumber) {
//         this.number = newNumber
//     }
//     calc(a, b) {
//         console.log(a + b * 6)
//     }
// }
// const model = new Car(5, 10,'ModelX')
// console.log(model)
// console.log(model.getNumber())
// model.changeNumber(300)
// console.log(model.getNumber())
// model.calc(5,100)


// class Storage {
//   constructor(items) {
//     this.items = items
//   }
//   getItems() {
//     return this.items
//   }
//   addItem(newItem) {
//     this.items.push(newItem)
//   }
//   removeItem(itemToRemove) {
//     this.items.indexOf(itemToRemove)
//   }
// }


// // Change code above this line
// const storage = new Storage([1, 2, 3, 4, 5, 6, 7, 8]);
// console.log(storage.getItems())




// class Car {
//   // Change code below this line
//   #brand;
//   #model
//   #price

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
//   // Change code above this line
// }
// const mango = new Car({ brand: "Mango", model: "mango@mail.com", price: "lalala" })
// console.log(mango.model)
// mango.model = 'asqwe'
// console.log(mango.model)


// class Car {
//   #price;
//   static MAX_PRICE = 50000

//   constructor({ price }) {
//     this.#price = price;
//   }
//   get price() {
//     return this.#price;
//   }
//   set price(newPrice) {
//     this.#price = newPrice > Car.MAX_PRICE ? "Больше MAX_PRICE" : "Меньше MAX_PRICE";
//   }
// }
// class Model extends Car {
// }
// const audi = new Car({ price: 35000 })
// const model = new Model({ price: 300 })
// console.log(model.price) // 300
// model.lala = 3
// console.log(model.lala) // 3
// console.log(audi.price); // 35000

// audi.price = 51000;
// console.log(audi.price); // 49000
// audi.price = 49000;
// console.log(audi.price); // 49000


// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line

//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
//    static checkPrice(price) {
//     return price > Car.#MAX_PRICE ? "Error! Price exceeds the maximum" : price
//     }
//      check(price) {
//     return price > Car.#MAX_PRICE ? "Error! Price exceeds the maximum" : price + " Ohuenno"
//   }
// }

// const audi = new Car({ price: 36000 });

// console.log(Car.checkPrice({ price: 36000 })); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice({ price: "" }))
// console.log(audi.check(61))
// // console.log(Car.check(66)) // Только если класс check  static


// class User {
//   constructor(email) {
//       this.email = email;
//   }
//   getemail() {
//     return this.email;
//   }
//    setemail(newEmail) {
//     this.email = newEmail;
//   }
// }
// class ContentEditor extends User {
//   // Тело класса ContentEditor
//     lvl = 0
// }

// class Con extends ContentEditor {
//     age = 32

// }
// class Lol extends Con {
//     damage = 100
    
// }

// const editor = new ContentEditor("mango@mail.com");

// const con = new Con("lalala");
// const lol =  new Lol("xyi")

// console.log(editor); // { email: "mango@mail.com" }
// editor.setemail(12); // Меняем значение email
// console.log(editor.getemail()) // Выводим значение email

// console.log(con)
// console.log(lol)


// class Animal {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     getName() {
//         return this.name
//     }
//     getAge() {
//         return this.age
//     }
// }
 
// class Dog extends Animal {
//     constructor(name,age,...lvl) {
//         super(name,age,...lvl)

//         this.lvl = lvl
//     }
// }
// class Mops extends Animal {
//     constructor(name,age,lvl,heart) {
//         super(name,age)
//         this.heart = heart
//         this.lvl = lvl
//     }
// }
// class Hero extends Mops {

// }
// const animal = new Animal("Animal", 10)
// const dog = new Dog("dog", 20, 50, 100)
// const mops = new Mops("mops", 25, 88, 22)
// const hero = new Mops("hero",100,90,1000)
// console.log(animal)
// console.log(dog)
// console.log(mops)
// console.log(hero)



// <---------------HERO--------------->

// class Person {
//     constructor(name, lvl, xp, damage, armor) {
//         this.name = name
//         this.lvl = lvl
//         this.xp = xp
//         this.damage = damage
//         this.armor = armor
//     }
//     getArmor() {
//         return this.armor
//     }
//     setArmor(count) {
//         console.log(`Your Armor up in ${count}`)
//         this.armor =  count
//     }
// }
// class Hero extends Person {
//     constructor(name, lvl, xp, damage, armor,soul) {
//         super(name, lvl, xp, damage, armor)
//         this.soul = soul
//     }
// }
// class AntiHero extends Person {
//     constructor(name, lvl, xp, damage, armor,soul) {
//         super(name, lvl, xp, damage, armor)
//         this.soul = soul
//     }
//     getDick(size) {
//         console.log(`I have ${size} cm, my dick is vary cool`)
//     }
// }
// const hero = new Hero("Axe", 10, 50, 40, 5,"Angel")
// const antiHero = new AntiHero("Dazl", 26, 60, 50, 7,"Demon")
// console.log(hero)
// console.log(antiHero)
// console.log(antiHero.getArmor())
// antiHero.setArmor(25)
// console.log(antiHero.getArmor())
// antiHero.getDick(128)



// <----------Простая задачка на наследование----------->

// class User {
//     constructor(name, surname, year) {
//         this.name = name
//         this.surname = surname
//         this.year = year
        
//     }
//     getFullName() {
//         return this.name + " " + this.surname
//     }
//     getCourse() {
//         return this.itsyear - this.year
//     }
// }
// class Student extends User {

// }

// var student = new Student('Иван', 'Иванов', 2020);
// console.log(student.getCourse())
// console.log(student.getFullName())


// < ----------Простая задачка на наследование + super----------->
    
// class Animal {
//     constructor(name) {
//         this.name = name
//     }
//     getName() {
//         return this.name
//     }
// }

// class Cat extends Animal {
//     constructor(name,age,lala) {
//         super(name)
//         this.age = age
//         this.lala = lala
//     }
//     meow() {
//         return `Cat ${this.name} is sayig meow, i have ${this.age} years old`
//     }
// }
// const cat = new Cat("garfild", 15, "lala")
// console.log(cat.getName())
// console.log(cat.meow())
// console.log(cat)


// function union(a, b, c) {
//     a.concat(c)
//     c.concat(b)
//     const f = b.flatMap(i => i)
//     console.log(f.sort((a,b) => a-b))
// }
// union([1, 2, 2, 3], [101, 2, 1, 10], [2, 1])




// class Person {
//     constructor({ name }) {
//         this.name = name
//     }
//     get name() {
//         return this.name
//     }
//     set name(newName) {
//         this.name = newName
//     }
// }

// class Cat extends Person {
//     constructor({ name, age }) {
//         super(name)
//         this.age = age
//     }
// }
// const person = new Person ({name: "Dima",})
// const cat = new Cat ({name: "Tima", age: 8,})
// console.log(person)
// console.log(cat)
// cat.name("Lala")
// console.log(cat.name)







// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   getemail() {
//     return this.email;
//   }

//   setemail(newEmail) {
//     this.email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     // Вызов конструктора родительского класса User
//     super(email);
//     this.posts = posts;
//   }
// }

// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.getemail()); // 'mango@mail.com'


// class User {
    
//   constructor(email) {
//     this.email = email;
//   }

//   get la() {
//     return this.email;
//   }

//   set la(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line

//    static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   // Change code above this line
//   constructor({email,accessLevel}) {
//     super(email)
//     this.accessLevel = accessLevel
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango)
// console.log(mango.email); // "mango@mail.com"
// console.log(mango.la)
// mango.la = "lalala"
// console.log(mango.la)


// const myFrends = {
//   "Melnyck Dmitry": {
//     name: "Dmitry",
//     familie: "Melnuck",
//     car: "Toyota Camry",
//     lackyNymber: 15
//   },
//   "Vitaly Tsebrov": {
//     name: "Vitaly",
//     familie: "Tsebrov",
//     car: "Honda Accord",
//     lackyNymber: 12
//   },
//   "Tarasenco Sergei": {
//     name: "Sergei",
//     familie: "Tarasenco",
//     car: "Mersedes Bens",
//     lackyNymber: 22
//   }
// }
// const b = {
//   "Natali Lohman": {
//     name: "Natali",
//     familie: "Lohman",
//     car: "Porche",
//     lackyNymber: 25
//   }
// }

// myFrends.Natali_Lohman = b

// console.log(myFrends)
// console.log(Object.keys(myFrends))

// const res = "JavaScript is awesome";
// console.log(res.toUpperCase())


// <---------Поиск по силектору----------->
// const mana = document.querySelector(".ulu")
// mana.style.color = "blue"
// console.log(mana)

// const two = document.querySelector(".u")
// two.style.color = "red"
// console.log(two)


// const agam = document.querySelectorAll("li")
// console.log(agam)

// // <---------Выводим содержимое тега\силектора------------->
// const text = document.querySelector(".tx")
// console.log(text.textContent)


// // <----------Replace picture----------->
// let y = 0
// const picture = document.querySelector(".pic")
// const but = document.querySelector(".btn")
// const bod = document.querySelector(".body")
// const tex = document.querySelectorAll("button")
// const te = document.querySelector(".btn-one")
// console.log(tex)
// function replacee() {
    
//     let onePic = 'https://placeimg.com/640/480/tech'
//     let troPic = 'https://goo.su/1Di3v3p'
//     y += 1
//     if (y % 2 === 0) {
//         console.log(y)
//         console.log(onePic)
//         console.log(tex)
//         return picture.src = onePic,bod.style.background = "#392B2B",tex.style.color = "white"
//     }
//     console.log(y)
//     console.log(troPic)
//     return picture.src = troPic,bod.style.background = "white",picture.style.width = "150px"
// }

// replacee()

// but.addEventListener("click", replacee)

// te.classList.remove("btn-one")
// te.classList.add("btn")
// te.style.color = "red"
// te.style.background = "#33ffff"

// // <----------Добавление атрибутов хтмл---------------->
// const man = document.querySelector(".ulu")
// const newMan = document.createElement("li")
// const newMa = document.createElement("li")
// man.append(newMan,newMa)
// newMan.textContent = "lalala"
// newMan.classList.add("lico")




//-------------------- Promose--------------------
// const promise = new Promise(( resolve, reject ) => {
//     const random = Math.random() < 0.5

// if (random) {
//     resolve("it`s Good")
// }
// else {
//     reject("No Good")
// }
// promise.then(value => {
//     console.log("onResolve " + value)
// }, error => {
//     console.log("onReject " + error)
// } ) } )

const timer = document.getElementById("timerr")
const stopTimer = document.getElementById("stop")
const startTimer = document.getElementById("start")
const stopAndStart = document.getElementById("stopAndStart")
let countTap = 0

timeUpdate()

function timeUpdate() {
    const newDate = new Date(`Jan 1, ${new Date().getFullYear() +1}`)

    const neew = new Date()

    const diff = newDate - neew
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor(diff / (1000 * 60 * 60 ) % 24)
    const minutes = Math.floor(diff / (1000 * 60) % 60)
    const sec = Math.floor((diff / 1000) % 60)

    timer.textContent = `${days} d. ${hours} h. ${minutes} minutes. ${sec} sec.`
}

let intervalId = setInterval(timeUpdate,1000)



startTimer.addEventListener("click", e => {
    stopAndStart.disabled = false
    stopTimer.disabled = false
    startTimer.disabled = true
    intervalId = setInterval(timeUpdate,1000)
    countTap += 1
    console.log("countTap = " + countTap + "startTimer")
    console.log(intervalId + "intervalId")
})
stopTimer.addEventListener("click", e =>{
    stopAndStart.disabled = true
    stopTimer.disabled = true
    startTimer.disabled = false
    countTap += 1
    clearInterval(intervalId)
    console.log("countTap = " + countTap + "stopTimer")
    console.log(intervalId + "intervalId")

})

stopAndStart.addEventListener("click", oneClickFun)

function oneClickFun() {
    if(countTap % 2 === 0) {
        clearInterval(intervalId)
        stopAndStart.id = "start"
        stopAndStart.disabled = false
        countTap += 1
        stopTimer.disabled = true
        startTimer.disabled = false
        console.log("countTap = " + countTap + "if")
    }
    else {
        intervalId = setInterval(timeUpdate,1000)
        stopAndStart.id = "stopAndStart"
        countTap += 1
        console.log("countTap = " + countTap + "else")
        console.log(intervalId + "else")
        startTimer.disabled = true
        stopTimer.disabled = false
    }
}
