//complete this code
class Animal {
    constructor(species){
        // super(species)
            this.species="";
    }
    get getmakeSound(){
       return  this.species;
    }
}

class Dog extends Animal {
    constructor(species){
        this.species="";
    }
    bark(){
        return "woof";
    }
}

class Cat extends Animal {
    constructor(species){
        this.species="";
    }
    purr(){
        return "purr";
    }
}
 let animal=new Animal("Human");
 console.log(animal.bark())
 console.log(animal.purr())
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;