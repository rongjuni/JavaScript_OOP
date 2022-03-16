console.log("Hello World!\n==========\n");

class Person{
    constructor (fName, pets, residence, hobbies){
        this.fName = fName;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }

    info (){
        let listedHobbies = this.hobbies;

        if(this.hobbies.length > 2){
            listedHobbies[0] = "are " + listedHobbies[0];
            listedHobbies[listedHobbies.length -1] = "and " + listedHobbies[listedHobbies.length-1];
            listedHobbies = listedHobbies.join(", ");
        }else if (this.hobbies.length == 2){
            listedHobbies[0] = "are " + listedHobbies[0]
            listedHobbies = listedHobbies.join(" and ");
        }else if (this.hobbies.length == 1){
            listedHobbies[0] = "is " + listedHobbies[0]
        }

        console.log( 
            `My name is ${this.fName}. I have total ${this.pets} pets and I live in ${this.residence}. My hobbies ${listedHobbies} `
            );
    }
    greeting(guest = "Guest"){
        console.log("Hello " + guest + "fellow person!");
    }

}

// newPerson = new Person('DoubleK',3,"Condo",['walk','run','swim'])
// newPerson.info()


class Coder extends Person{
    constructor(name, pets, residence, hobbies, occupation){
        super(name, pets, residence, hobbies);
        this.occupation = 'Full Stack WEb Developer';
    }
    greeting(guest = 'Guest'){
        console.log( 'Hi ' + guest + 'TrueCoders!')
    }
}


const djseo = new Person ('Matthew', 2, 'VA', ['drinking','swimming','playing'])


const chloe = new Coder('ChloeKim', 2, 'LA', ['singing','movie'])
const chloe2 = new Coder('Double K', 4, 'MD', ['cooking'])


console.log(djseo.info())
console.log(chloe.info());
console.log(chloe2.info());

djseo.greeting()