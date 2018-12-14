class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    middleInitial: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.middleInitial + " " + person.lastName;
}

let user = new Student("Vincent", "M.", "Bloise");

document.body.innerHTML = greeter(user);