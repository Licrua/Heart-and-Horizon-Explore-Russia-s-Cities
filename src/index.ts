// const isDone: boolean = false;
// const age: number = 32;
// const userName: string = "Alice";
// const list: number[] = [1, 2, 3];
// // let x: [string, number]; // кортеж
// // x = ["hello", 10]; // правильно

// console.log(isDone, age, userName, list);
// console.log('dasda');

// const greet = (name: string): string => {
//     return name + 3
// }
// console.log('hello' + ' ' + greet('ilya'));
// const object : {1: string, 2: string} = {1: "alice", 2: 'petrovna'}
// console.log('object', object);

// type Items = number | string;
// type People = number | string;
// type ages = (number | string)[];
// let city: string  = 'Vitebsk'

// const tushmarek = (user: {item: Items, relationships: People, age: ages }): void  => {
//     city = '161rus'
//     console.log(user.item, user.relationships, user.age, city);
// }
// tushmarek({item: "petrushka", relationships:  'mommy', age: [12,14,15, '123dasda']})

// const numbers = [1, 3, 8, 9, 100, 23, 55, 34];

// const filtredArray = numbers.filter((item) => item % 2 === 0);
// console.log(getEvenNumbers);

// const func = (word?: string, exampleArray?: string[]) => {
//     return new Set(exampleArray)
// }

// console.log(func(_,['aabb', 'abcd', 'bbaa', 'dada']));
// const stringArr = ['aabb', 'abcd', 'bbaa', 'dada'];
// const set = new Set(...stringArr);
// set.add('abba')
// console.log(set);
// const anogram = (example: string) => {
//     return example.split('').sort().join('')
// }
// console.log(anogram('bbaa'));

// const filterAnagrams = (a: string, b: string[]): string[] => {
//     const sortedA = Array.from(a).sort().join('')
//     return b.filter(item =>  Array.from(item).sort().join('') === sortedA
//     )
// }
// console.log(filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));


// const arrik = ['aabb', 'abcd', 'bbaa', 'dada'];
// const sortedArrik = arrik.sort();
// console.log(sortedArrik);
// const course = {
//     name: 'Java',
//     lessons: ['variables', 'functions', 'conditions', 'govno', ],
//   };

// const isComplete = (course: {name: string, lessons: string[]}): boolean => {
//     return course.lessons.length >= 4
// }
// console.log(isComplete(course));

// enum Users {Sanek , Povidlo = 'rolik', Jenya = 3, Grishanya = 4}
// const current: string = Users[4];
// console.log(current);

// enum ModalStatus {
//  Opened = "ModalStatus.Opened" , 
//  Closed = "ModalStatus.Closed" ,
// }
// const buildModal = (text: string, status: ModalStatus) => {
//   return {text: text, status: status}
// }

// console.log(buildModal('hexlet is zalupa', ModalStatus.Opened));
// const user1 = { name: 'Petr', age: 8 };
// const user2 = { name: 'Petno', age: 10 };



// type User = {
//   name: string,
//   age: number,
// }
// const getOlderUser = (user1: User, user2: User ): null | User => {
//   if(user1.age > user2.age) return user1;
//   else if(user1.age === user2.age) return null
//   else {
//     return user2
//   }
// }
// console.log(getOlderUser(user1, user2));




// const sentence = 'table cat table dog dog apple table';

// const words = sentence.split(' ');
// const initial: any = {};
// const result = words.reduce((acc, word) => {
//  console.log(acc[word]);
//  console.log('acc', acc);
//  console.log('word', word);
 
//   acc[word] = Object.hasOwn(acc, word) ? acc[word] + 1 : 1;
//   return acc;
// }, initial);

// console.log(result);

// const getParams = (str: string): any => {
//   const strik = str.split('&');
//   console.log('strik', strik);
//   const mapped = strik.map(item => item.replace('=', ':'));
//   const splited = mapped.
//   console.log('mapped', mapped);
//   const obj = {...mapped};
//   console.log(obj);
  
  
  // const jorino = strik.join(' ');
  // const dsdasd = jorino.split(' ')
  
  
//   const joined = strik.join(' ');
//   console.log(joined);
  
//   const joinedSplit = joined.split('=');
//   console.log('joinedSplit', joinedSplit);
  
//   const nechetki = [], chetki = []
//   let obj;
//   for(let i = 0; i < joinedSplit.length; i++) {
//     console.log(joinedSplit[i]);
//     if(i % 2 === 0) {
//         chetki.push(joinedSplit[i])
//     }
//     else {nechetki.push(joinedSplit[i])}
//     obj = {[chetki[0]]: nechetki[0], [chetki[1]]: nechetki[1]};
//   }
// return obj
// }

// console.log(getParams('name=hexlet&count=3&order=asc'));

// const array = ['name:hexlet', 'count:3', 'order:asc'];
// const getParams = (value: string): any => {
//     const object: any = {}
//     const valueSplit = value.split('=').join(':').split('&')
//     const result = valueSplit.reduce((acc: any, item: any): any => {z
//       const [key, value] = item.split(':');
//       acc[key] = value;
//       return acc;
//     }, object);
//     return result
// }

// const obj = array.reduce((acc, item) => {
//   const [key, value] = item.split(':');
//   acc[key] = value;
//   return acc;
// }, {});


// const str = "hello world";
// const newStr = str.split('o');
// const parik =  newStr.join('a')
// console.log('parik', parik);

// console.log(getParams('name=hexlet&count=3&order=asc'));


// const getParams = (value: string): any => {
//   const object: any = {}
//   const valueSplit = value.split('=').join(':').split('&');
//   console.log('valueSplit', valueSplit);
  
//   const result = valueSplit.reduce((acc: any, item: any): any => {
//     console.log('item', item);
//       const [key, value] = item.split(':');
//       console.log('key', key);
//       console.log('value', value);
//       console.log('acc', acc[key]);
      
//       acc[key] = value;
//       return acc;
//   }, object);
//   return result
// };
// console.log(getParams('name=hexlet&count=3&order=asc'));


// const arrik = ['parashka', 'besplatnaie'];
// const [key, value] = arrik;
// console.log(key, value);


// const obj : {name: string | null
//  } = {
//   name: 'grishko'
// }

// console.log(obj?.name ?? 'petronikc');

// namespace Company {
//   export function isEmployeeEmail(email: string,companyDomain : string) {
//     return ragex.includes(companyDomain)
// }
// }

// type User = {
//   email: string
// }; 

// function authorize(user: User | null): boolean {
//   const companyDomain = 'hexlet.io';

//   const email = user?.email ?? '';

//   return Company.isEmployeeEmail(email, companyDomain);
// }

// export default authorize;

// const str1 = 'hexlet.io@example.com';
// const str2 = 'hexlet.io';
// console.log(str1.includes(str2));

// const numbers = [1, -5, 2, 3, 4, 133];
// function filter(num: number[], callback: () => number[]) {
//   return num.filter(callback)
// }
// console.log(filter(numbers,));

// function map(arr: number[], callback: (item:number, index: number) => number[])  {
//   return arr.map(callback)
// }

// console.log(map([1,2,3,4]));

// function filter(coll: number[], callback: (arg: number, index?: number) => boolean) {
//   const result: number[] = [];
//   coll.forEach((n, index) => {
//     // Здесь он передается в колбек
//     if (callback(n, index)) {
//       result.push(n);
//     }
//   });
//   return result;
// }
// function isEven(num: number): boolean {
//   return num - 2 === 0;
// }
// const arr = [1,2,3,4,5,6]

// console.log(filter(arr, isEven));


// const user : {
//   firstName: 'ilya', 
//   age: 36
// }   = {firstName: string, age = number}

// function f({ firstName, age }: { firstName: string, age: number }): void {
//   console.log(firstName, age);
// }
// console.log(f(user));

// function foo(valik: number[]) {
//   console.log(valik);
  
// }
// const fogger = [{1: 'sdf', 2: 'dada' ,3: [1,2,3,4,5], 4: {
//   4.1: 'dada',
//   4.2: {tema: 'ikra'}
// }}]
// console.log(foo([{x: 12, y: 15}]));

// console.log(fogger);
// const lessonsCount = ({ lessons: [...rest] }: { lessons: string }): number => {
//   console.log(rest);
//   const arrik = [...rest];
//   return arrik.length;
// }
 
// console.log(lessonsCount(course))


// function lessonsCount({ lessons }: { lessons: string[] }): number {
//   console.log(lessons);
//   return lessons.length;
// }

// console.log(lessonsCount(course));

// const arrik = [1,2,3];
// console.log(...arrik);

// function max(numbers: number[]): number {
//   return Math.max(...numbers);
// }

// console.log(max(1,2,3));

// function newYearCongratulate(name: string): string;
// function newYearCongratulate(year: number, name: string): string;

// function newYearCongratulate(arg1: unknown, arg2?: unknown): string {
//     if (typeof arg1 === 'string') {
//         return `Hi ${arg1}! Happy New Year!`;
//     } else if (typeof arg1 === 'number' && typeof arg2 === 'string') {
//         return `Hi ${arg2}! Happy New Year ${arg1}!`;
//     } else {
//         throw new Error('Invalid arguments');
//     }
// }

// // Примеры использования:
// console.log(newYearCongratulate('John')); // Hi John! Happy New Year!
// console.log(newYearCongratulate(2023, 'Mila')); // Hi Mila! Happy New Year 2023!



// function last (value: string | number) {
//     if(typeof value === 'string') {
//       return value.slice(-1)
//     }
//     else if(typeof value === 'number') {
//       return Number(String(value).slice(-1))
//     }
// }


// const unique =  (value: (number | string)[]): (string | number)[] => {
//   return Array.from(new Set(value))
// }
// console.log(unique([2, 3, -100, -100, -100]));
// const getField = (value: number) => {
//   const arrik: null[] = []
//   for(let i = 0; i < value; i++) {
//      arrik.push([null])
//   }
//   return arrik
// }
// console.log(getField(3));

// const reverse = (value: readonly number[]): number[] => {
//   const grivna: string[] = value.map(item => String(item));
//   const len: number = grivna.length;
//   const result: number[] = []
//   for (let i = len - 1;  i >= 0; i--) {
//     result.push(Number(grivna[i]))
//   }
//   return Array.from(result)
// }

// console.log(reverse([10, 33, 7, 0]));

// type Point = [
//   number,
//   number,
//   number
// ]
// const p1: Point = [1, 3, 4];
// const p2: Point = [1, 3, 4];
// const p3: Point = [0, 8, 4];

// const isTheSamePoint = (value1: Point, value2: Point): boolean => {
//         const mapperkoni = value1.map((item, index) => {
//           return item === value2[index]
//         });
//         mapperkoni.every(item => console.log(item)
//         )
//         return mapperkoni.every(item => item === true)
        
// }
// console.log(isTheSamePoint(p1, p2));
// type CustomType = null | undefined | number
// const persik: CustomType = 13
// console.log(persik);

// const formatPrice = (value: number | undefined | null): null | string => {
//   if(value === undefined || value === null) {
//     return `$0.00`
//   }
//   return `$${value.toFixed(2)}`
// }
// console.log(formatPrice(200));


// type Turtle = 'turtle' | null;

// type Game = {
//   makeTurn: (direction: 'left' | 'right') => void;
//   state: Array<Turtle>;
// };

// const startGame = (): Game => {
//   const state: Array<Turtle> = ['turtle', null, null, null, null];
//         makeTurn.left
    
//   return { makeTurn, state };
// };
// // const { makeTurn, state } = startGame();


// console.log(Game.makeTurn);
// const smth: Turtle[] = ['turtle', null,null,null,null];
// console.log(smth);
// smth[0] = null
// smth[1] = 'turtle'
// /////
// smth[2] = "turtle"
// smth[1] = null
// //////
// smth[3] = 'turtle'
// smth[2] = null
// console.log(smth);

// type Turtle = 'turtle' | null;

// type Game = {
//   makeTurn: (direction: 'left' | 'right') => void;
//   state: Array<Turtle>;
// };

// const startGame = (): Game => {
//   const state: Array<Turtle> = ['turtle', null, null, null, null];

//   // BEGIN
//   const makeTurn = (direction: 'left' | 'right'): void => {
//     const turtleIndex = state.indexOf('turtle');
//     const nextIndex = direction === 'left' ? turtleIndex - 1 : turtleIndex + 1;
//     console.log(nextIndex);
    

//     if (nextIndex < 0 || nextIndex > 4) {
//       throw new Error('Out of bounds');
//     }
//     console.log(state[turtleIndex]);
    
//     state[turtleIndex] = null;
//     state[nextIndex] = 'turtle';
//   };
//   // END

//   return { makeTurn, state };
// };

// export default startGame; 
// const {makeTurn, state} = startGame();
// makeTurn('right')
// makeTurn('right')
// makeTurn('right')
// makeTurn('right')
// makeTurn('right')

// console.log(state);



// enum Permission {
//   READ = 'READ',
//   WRITE = 'WRITE',
//   DELETE = 'DELETE',
// }

// type User = {
//   login: string,
// };

// type AdminPermission = {
//   permission: Permission,
// };

// // BEGIN (write your solution here)
// type Admin = User & AdminPermission
// const addAdmin = (value: User): Admin => {
//     return {...value, permission: Permission.READ}
// }
// // END
// const user: User = { login: 'login1' };
// console.log(addAdmin(user));

// type Form = {
//   age: {
//     value: number,
//     validator: (val: number) => boolean
//   },
//   name: {
//     value: string,
//     validator: (val: string) => boolean
//   }
// };

// const form: Form = {
//   // BEGIN (write your solution here)
//       age: {
//         value: 31 ,
//         validator: (val) => typeof val === 'number' ? false : false
//       },
//       name: {
//         value: 'ezhik',
//         validator: (val) => typeof  val === 'string' ? true : false
//       }
//   // END
// };
// console.log(form.age.validator(form.age.value));


// type User = {
//   id: number,
//   name: string,
//   age: number,
// };

// type Friends = [number, number];

// export type UserResponse = {
//   users: User[],
//   friends: Friends[]
// };


// const userJson = JSON.stringify({
//   users: [
//     { id: 1, name: 'John', age: 20 },
//     { id: 2, name: 'Mary', age: 21 },
//   ],
//   friends: [
//     [1, 2],
//   ],
// });

// console.log(userJson);


// const getUserFriends = (userResponse : UserResponse, userId: number): [] | User[] => {
//     console.log(userResponse);
    
//     console.log(result);
    
//     return result.users.filter((item:User) => item.id === userId)
// }

// console.log(getUserFriends(userJson, 1));


// export default getUserFriends;


// const arrik: number[] = [1,2,3,4,5];
// const jarik: {
//   users: [{ id: number, name: string, age: number }],
//   friends: [number[]]
// } = {
//   users: [
//     { id: 1, name: 'John', age: 20 },
//     { id: 2, name: 'Mary', age: 21 },
//   ],
//   friends: [
//     [1, 2],
//   ],
// };

// const user = {
//   firstName: 'Vasiliy',
//   lastName: 'Kuzenkov',
//   type: 'user'
// }

// const admin = {
//   firstName: 'Kirill',
//   lastName: 'Mokevnin',
//   type: 'admin'
// }

// const formatUser = (user) => [user.type, ':', user.firstName, user.lastName].join(' ');


// console.log(formatUser(user));
// console.log(formatUser(admin));


// class User  {
//   name: string = 'Tom ';
//   age: number = 24
// }
// const user = new User();
// console.log(user);

// type Data = {
//   name: string
//   size: number
// }

// class CustomFile {
//   name:string
//   size: number
//   arr: string [] = []
//   counter: number =  0
//   constructor(data: Data) {
//       this.name = data.name
//       this.size = data.size

//   }
//    toString(): string  {
//     this.arr.push(this.name)
//     if(this.arr.length > 1) {
//       this.counter += 1
//     }
//     return this.arr[this.counter] === this.arr[this.counter -1] ? 
//     `(copy) ${this.name} (${this.size} bytes)` : `${this.name} (${this.size} bytes)`
//     // return `${this.name} (${this.size} bytes)`}
// }
// }

// const file = new CustomFile({ name: 'open-world.jpeg', size: 1000 });
// const file2 = new CustomFile({ name: 'open-world.jpeg', size: 1000 });



// type OptionName = string;
// type OptionSize = number;
// type CustomFileOptions = { name: OptionName, size: OptionSize };

// class CustomFile {
//   name: OptionName;

//   size: OptionSize;

//   private isCopy: boolean;

//   constructor(options: CustomFileOptions) {
//     this.name = options.name;
//     this.size = options.size;
//     this.isCopy = (options instanceof CustomFile);
//   }

//   toString(): string {
//     const copyString = this.isCopy ? '(copy) ' : '';
//     return `${copyString}${this.name} (${this.size} bytes)`;
//   }
// }

// const file = new CustomFile({ name: 'open-world.jpeg', size: 1000 });
// console.log(file);

// const file2 = new CustomFile(file);
// console.log(file.toString());
// console.log(file2.toString());
// console.log(file2.toString());



// type CustomFileOptions = {
//   name: string;
//   size: number;
// };

// class CustomFile {
//   private name: string;
//   private size: number;

//   constructor(options: CustomFileOptions) {
//     this.name = options.name;
//     this.size = options.size;
//   }

//   protected toString() {
//     return `${this.name} (${this.size} bytes)`;
//   }
// }
// type ImageFile = CustomFileOptions &  {
//   width: number,
//   height: number
// }

// class ImageCustomFile extends CustomFile {
//     private width: number;
//     private height: number;
//     constructor(images: ImageFile) {
//       super(images)
//       this.width = images.width
//       this.height = images.height
//     }
//     toString() {
//       return `${super.toString()} ${this.width}x${this.height}`
//     }
// }

// const value = new ImageCustomFile({
//   name: 'image.png',
//   size: 100,
//   width: 200,
//   height: 300,
// });
// console.log(value.toString());


// export default ImageCustomFile;



// class CustomFile {
//   constructor(public name: string, private size: number) {}

//   toString(): string {
//     return `${this.name} (${this.size} bytes)`;
//   }
// }

// const file = new CustomFile('open-world.jpeg', 1000);
// console.log(file);

// const obj = {
//   'name': "pers", 
//   'surname': 'dasda'
// }
// console.log(obj);


// interface IFlying {
//   canFly: true;
// }

// interface IBird extends IFlying {
//   isLiving: true;
// }

// interface IPlane extends IFlying {
//   canCarryPeople: true;
// }

// interface ISuperMan extends IBird, IPlane {
//     guessWho(value: string): string
// }

// const superMan: ISuperMan = {
//   guessWho(value:string): string {
//     const superman = 'superman'
//     if (value !== superman.toUpperCase() || value !== superman.toLowerCase())
//     {
//       return `it's ${value}`
//     }
//     else if(this.isLiving, this.canFly, this.canCarryPeople) {
//       return `it's superman`
//     }
//   }
// }

// console.log(superMan.guessWho('superman'));



// function last<T> (arr: T[]): T |   null {
//     if(arr.length > 1) {
//       return arr.pop()
//     }
//     return null
// }
// console.log(last(['chergo', 'faness', 'revenko']));

// interface Pair<T, U> {
//   first: T;
//   second: U;
// }

// let pair1: Pair = { first: 1, second: "two" };
// let pair2: Pair = { first: "hello", second: true };
// console.log(pair1);
// console.log(pair2);


// type MySet<T>= {
//    arr: T[]
//     add: (param: T): T {
//         arr.push(param)
//         return arr.length
//     }
//     has: (param: T) => {
//         arr.includes(param)
//     }
// }


// type MySetter<T> = {
//    arr: T[],
//    add: function (param:T): number,
//    has: function(param:T): boolean, 
//   }

// type MySetter<T> = {
//   arr: T[];
//   add(param:T): number;
//   has(param:T): boolean;
// };


// const mySet: MySetter = {
//   arr: [],
//   add: function(param) {
//     this.arr.push(param)
//     return this.arr.length
//   },
//   has: function(param) {
//    return this.arr.includes(param)
//   }
// }

// console.log(mySet.add(12));
// console.log(mySet.add(12));


// type MyArrayType<T> = {
//   coll: T[],
//   push(item:T): T,
//   filter(items: T[], callback: (item: T) => boolean): T[]
// }

// const myArray: MyArrayType<number> = {
//   coll: [],
//   push: function(item) {
//     return this.coll.push(item)
//   },
//   filter: function(array, callback) {
//     return array.filter(callback)
//   },
// }




// type NewMapType<T, U> = {
//   entries: {[key: string]: U}[];
//   setMap(key: T, value: U): void;
//   getMap(value: T): U | undefined 
// }


// const newMap: NewMapType<string, number> = {
//   entries: [],
//   setMap: function(key, value) {
//     this.entries.push({[key]: value})
//   },
//   getMap: function(value) {
//     const find = this.entries.find(item => item.hasOwnProperty(value))
//     return find ? find[value] : undefined
//   }
// }
// newMap.setMap('one', 1)
// newMap.setMap('two', 2)
// newMap.setMap('three', 3)

// console.log(newMap.getMap('two'));


// const object = {'one': 1};
// console.log(object.one);


// function toString(obj: {}) {
//   return obj.toString();
// }

// toString('wow'); // Ok!
// console.log(toString('wow'));
// toString(123); // Ok!
// console.log(toString(123));

// toString({}); // Ok!