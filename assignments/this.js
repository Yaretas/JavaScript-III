/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding- The "This" KW will always bind to the window  by default if its not bind to any other object. 
* 2. Implicit Binding - (Automatic) with Object and methods. We use the "This" KW and bind it to the current local scope of a method.
* 3. Explicit Binding - We used explicit to functions, and we used it to call a method trough  function.
* 4. New Binding - Creates a new object and set the constructor of an object to another object.
*
* write out a code example of each explanation above
*/

// Principle 1
console.log(this);
// code example for Window Binding

// Principle 2

// code example for Implicit Binding

const hobbit = {
    name: "Frodo Baggins",
    age: 44,
    food: "Elf Bread",
    cook: function(){
        return `${this.name} Loves to cook ${this.food}`;
    }
}

console.log(hobbit.cook());




// Principle 3

// code example for New Binding




// Principle 4

// code example for Explicit Binding

const person = {
    "name":"Yara",
}

const skills = ["HTML","CSS","JS"];

function intro(html, skill2, skill3){
    return `Hello, my name is ${this.name} and I love to program in: ${html}, ${skill2}, ${skill3}`;
}

// console.log(intro.call(person,"HTML"));
// console.log(intro.apply(person, skills));
const useLater = intro.bind(person,...skills);

console.log(useLater());

