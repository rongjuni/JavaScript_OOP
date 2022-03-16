console.log("Hello World!\n==========\n");

class Person{
    constructor (fName, pets, residence, hobbies){
        this.fName = fName;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }

    info (){
        console.log( `${this.fName}\n${this.pets}\n${this.residence}\n${this.hobbies}`)
    }
    greeting(){
        console.log("Hello fellow person!");
    }

}

// newPerson = new Person('DoubleK',3,"Condo",['walk','run','swim'])
// newPerson.info()


class Coder extends Person{
    constructor(name, pets, residence, hobbies, occupation){
        super(name, pets, residence, hobbies);
        this.occupation = 'Full Stack WEb Developer';
    }
    greeting(){
        console.log( 'Hi TrueCoders!')
    }
}


const djseo = new Person ('Matthew', 2, 'Single House', ['drinking','swimming'])


const chloe = new Coder('ChloeKim', 2, 'same house', ['cellphone','running'])


console.log(djseo.info())
console.log(chloe.info());