class Player { // encapsulation of the common  instance
    constructor(name, age, skill){ // constructor is the built-in function which is called inside of the class
    this.name = name,
    this.age = age
    this.skill = skill
    }
    sayHello(){ // this is the method
        return `Hi, I am ${this.name}. I am ${this.age} years old.`
    }
}

const  mashrafi = new Player("Mashrafi", 28, "Bowler") // here mashrafi is the instance

const result = mashrafi.sayHello()
// console.log(result)


// example 2
class Human {
    constructor(name){
        this.name = name
        this.arms = 2
        this.legs = 2
    }
}

// instead repeating the code again we use extends
// class Baby {
//     constructor(name){
//         this.name = name
//         this.arms = 2
//         this.legs = 2
//         this.cute = true
//     }
//     cry() {
//         return ("waa waa!")
//     }
// }



// we use extends to ignore repetition
class Baby extends Human {
    constructor(name){
        super()
        this.cry = true
    }
    cry(){
        return `waa waa!`
    }
}


// same as
class Teenager extends Human {
    constructor(name){
        this.emotional = true
    }

    crush(){
        return `I have a crush on Jorina`
    }
}

const abdul = new Baby("Abdul")
console.log(abdul.name)