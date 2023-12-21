class Animal {
    constructor(name) {
        this.name = name
    }
    talk() {
        console.log('yoooooo, I am', this.name)
    }
}

const myAnimal = new Animal ('butthead')
myAnimal.talk();

class Sheep extends Animal {
    constructor(name) {
        super(name)
    }
    talk() {
        console.log('I am a baaaaad baaaaad animal, also fluffy');
    }
    fly() {
        console.log('I can fly, but in a very different way than the duck');
    }
}

class Duck extends Animal {
    constructor(name) {
        super(name)
    }
    talk() {
        console.log('I am a quacky b');
    }
    fly() {
        console.log('i can fly so high, dude')
    }
}

class RubberDuck extends Duck {
    constructor(name) {
        super(name)
    }
    fly() {
        console.log('I float, b')
    }
}

const badSheep = new Sheep ('Sheila')
const bDuck = new Duck ('dicky')
const rubDuck = new RubberDuck ('Rubby')

badSheep.talk()
badSheep.fly()
bDuck.talk()
bDuck.fly()
rubDuck.talk()
rubDuck.fly()