// //Default constructor
// function Car() {
//     this.name = "Tesla";
//     this.model = "T1";
//     this.printCar = () => {
//         console.log(this.name, this.model);
//     }
// }

// let newObj = new Car();
// console.log(newObj.name);
// console.log(newObj.model);
// newObj.printCar();



// // Activity 1 - Circle
// function Circle(radius, location) {
//     this.radius = radius;
//     this.x = location.x;
//     this.y = location.y;

//     this.draw = () => {
//         console.log("Current location of a circle is :- ", this.x, " ", this.y);
//     }

//     this.move = (x, y) => {
//         this.x = x;
//         this.y = y;
//     }

//     this.moveby10 = () => {
//         for(let i = 0; i <= 10; i++) {
//             this.move(i, i);
//             this.draw();
//         }
//     }
// }

// const circle = new Circle(5, {x: 5, y: 6});
// circle.draw();
// circle.move(2, 3);
// circle.draw();
// circle.moveby10();


// const name = {
//     name: "Onkar",
//     greet: function () {
//         console.log(this.name);
//     }
// }

// name.greet();



// Activity user friends
function User(fullName) {
    this.fullName = fullName;
    this.friendsList = [];
    this.addFriend = (friendName) => {
        this.friendsList.push(friendName);
    }
    this.printFriendsList = () => {
        console.log(this.friendsList);
    }
}


const newUser = new User("Onkar Phulwalkar");
console.log(newUser.fullName);
newUser.printFriendsList();
newUser.addFriend("Crio.do");
newUser.printFriendsList();
