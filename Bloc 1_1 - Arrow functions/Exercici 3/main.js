class Person {
    constructor (name) {

        this.name = name;
    }

    greet = () => {
        console.log(`Hello, ${this.name} !!!`);
       
    }
}   

console.log("Exercici 3");
let person1 = new Person ("Eva");
person1.greet();
