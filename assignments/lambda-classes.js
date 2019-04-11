// CODE here for your Lambda Classes
class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }
    speak() {
        return (`hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructors extends Person {
    constructor(props) {
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }

    demo(subject) {
        console.log(`today we are learning about ${subject}.`)
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

class Students extends Person {
    constructor(props) {
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubject = props.favSubject;
    }

    listSubjects(favSubject) {
        console.log(favSubject);
    }

    PRAssignment(subject) {
        console.log(`${student.name} has submitted a PR for ${subject}`)
    }

    sprintChallenge(subject) {
        console.log(`${student.name} has begun sprint challenge on ${subject}`)
    }
}

class PM extends Instructors {
    constructor(props) {
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`)
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }


}


const homer = new Person({
    name: "Homer",
    age: 50,
    location: "Springfield",
    gender: "Boys"
  })

const fred = new Instructors({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const justin = new Students({
      name: "justin",
      location: 'LA',
      age: '22',
      gender: 'male',
      previousBackground: 'mcdonalds',
      className: 'lambda',
      favSubject: 'Science'
  })

const ashley = new PM({
    name: 'Ashley',
    age: 26,
    gradClassName: 'WEB19',
    favInstructor: 'CJ',
})

  console.log(homer.speak());
  console.log(fred.demo('math'));
  console.log(ashley.debugsCode(justin, justin.favSubject))

// let pers = 

// class Students {
//     constructor(name, age, location, gender) {
//         this.name = name;
//         this.age = age;
//         this.location = location;
//         this.gender = gender;
//     }
//     speak() {
//         return (`hello my name is ${this.name}, I am from ${this.location}`)    }
// }

// class PM {
//     constructor(name, age, location, gender) {
//         this.name = name;
//         this.age = age;
//         this.location = location;
//         this.gender = gender;
//     }
//     speak() {
//         return (`hello my name is ${this.name}, I am from ${this.location}`)    }
// }