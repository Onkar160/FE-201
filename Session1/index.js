// //-------------------in-session Activity-1------------------------
// function Circle(radius, x, y) {
//     this.radius = radius,
//     this.location = {x: x, y: y},
//     this.draw = () => {
//         console.log(this.location);
//     },
//     this.move = (nextX, nextY) => {
//         this.location = {x: nextX, y: nextY}
//     }
// }

// let circle = new Circle(5.22, 5, 6);

// // circle.draw();
// // circle.move(0, 0);
// // circle.draw();

// for(let i = 0; i <= 10; i++) {
//     circle.move(i, i);
//     circle.draw();
// }






// //----------------------------in-session Activity-2------------------
// function User(fullName) {
//     this.fullName = fullName;
//     this.friendList = [];
//     this.addFriend = (newFriend) => {
//         this.friendList.push(newFriend);
//     };
//     this.printFriendList = () => {
//         console.log(this.friendList);
//     };
//     this.findMutualWith = obj => {
//         return this.friendList.filter(friend => obj.friendList.includes(friend))
//     }
// }

// let onkar = new User("Onkar");
// onkar.addFriend("Crio");
// onkar.addFriend("Navya");

// let navya = new User("Navya");
// navya.addFriend("Deepika");
// navya.addFriend("Crio");

// let mutualFriends = onkar.findMutualWith(navya);
// console.log(mutualFriends);

/* Note
    if we use arrow function in object's property method then we cannot use 'this' keyword with that arrow
    becase arrow function's don't have this in it's context so instead of arrow we can use function() which has it's own
    context and then that 'this' will point to that object in which this method is
*/

/* 
Whenever we call constructor with new keyword it does following things :-
    1. First it's going to create new object
    2. It will set the prototype of constructor functions to that object
    3. it binds 'this' keyword to that newly created object
    4. it returns that new object if constructor function is not returning it and vice versa
*/





// //using bind
// const student = {
//     name: "Onkar",
//     greet: function() {
//     console.log("Hello " + this.name);
//     }
//   }

//   function executor(callBack) {
//     callBack();
//   }

//   executor(student.greet);




// using bind example 2

const student = {
  name: "Onkar",
  greet: function () {
    console.log("Hello " + this.name);
  },
};

Object.setPrototypeOf(student, {
  greetProto: function () {
    console.log("Hello from proto " + this.name);
  },
});

function executor(callBack) {
  callBack();
}

const teacher = {
  name: "Mandarin",
  greet: function () {
    console.log("hi");
  },
};


executor(student.greet.bind(teacher));

// prototype also needs to be get binded if passing as callback
executor(student.greetProto.bind(teacher));
