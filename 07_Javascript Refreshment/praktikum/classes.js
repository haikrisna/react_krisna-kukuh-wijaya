class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hallo, nama saya ${this.name} dan saya berumur ${this.age} tahun.`);
    }
}

const person1 = new Person("Krisna", 19);
person1.introduce(); 

const person2 = new Person("Kartika", 25);
person2.introduce(); 