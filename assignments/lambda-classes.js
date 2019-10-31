// CODE here for your Lambda Classes
class Person{
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
    speak(){
        console.log(`Hellow my name is ${this.name}, I am from ${this.location}`)
    }

   
}

class Instructor extends Person{
    constructor(attr){
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
        
    }

    demo(subject){
        console.log(`Today we are learning about ${subject}`)
    }

    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
    issueGrades(student){
       
       const num = Math.round(Math.random() * 20);  // getting a random grade 0 to 20
       const sign = Math.floor(Math.random() * 2) === 1 ? 1 : -1; //getting a random sign
       console.log(`original grade of student ${student.name}: ${student.grade}`)
       student.grade += num *sign;
       console.log(`grade issued by ${this.name} to student ${student.name} is ${num * sign}, current total grade is ${student.grade}`)
       return student.grade;
          
    }
}

class Student extends Person {
    constructor(attr){
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
        this.grade = attr.grade;
    }

    listsSubjects(){
        this.favSubjects.forEach(cur => console.log(cur))
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
    graduation(){
        if (this.grade > 70){
            console.log(`Congraturation ${this.name} for your graduation, your grade is ${this.grade}.`)
        } else {
            console.log(`dear ${this.name}, your grade ${this.grade} is not enough for graduation. Keep up your work!`)
        }
    }
}

class ProjectManagers extends Instructor{
    constructor(attr){
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

// creating object for testing classes

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const peter = new Instructor({
      name: 'Peter',
      location: 'Spring Field',
      age: 42,
      favLanguage: 'Python',
      specialty: 'css',
      catchPhrase: 'Remeber when you determined at the biginning'

  })

  const james = new Student({
      name: 'James',
      location: 'Los Angeles',
      age: '59',
      previousBackground: 'teacher',
      classNmae: 'CS334',
      favSubjects: ['html', 'math','science','English','Computer Science'],
      grade: 50

  })
  const susan = new Student({
    name: 'Susan',
    location: 'San Francisco',
    age: '42',
    previousBackground: 'realtor',
    classNmae: 'TD235',
    favSubjects: ['css', 'JavaScript','history','Spanish'],
    grade: 60

})

const sunny = new ProjectManagers({
    name: 'Sunny',
    location: 'New York',
    age: 33,
    favLanguage: 'C#',
    specialty: 'C++',
    catchPhrase: 'Best time is yet to come',
    gradClassName: 'CS635',
    favInstructor: 'Peterson'

})

const phil = new ProjectManagers({
    name: 'Phil',
    location: 'Austin',
    age: 49,
    favLanguage: 'javaScript',
    specialty: 'pearl',
    catchPhrase: 'best investion is education',
    gradClassName: 'TD1234',
    favInstructor: 'Cathy'

})
// testing.....
// insturctio: fred, peter - student: james, susan - PM: sunny, phil
fred.speak();
peter.speak();
fred.demo('English');
peter.grade(james, 'history');
peter.grade(susan, 'html5');
james.speak();
james.listsSubjects();
susan.listsSubjects();
james.PRAssignment('javaScripts');
susan.sprintChallenge('python');
sunny.standUp('Web25');
phil.debugsCode(susan, 'javaScripts');
sunny.demo('css');
phil.grade(susan,'math');
phil.speak();
fred.issueGrades(susan);
console.log(susan.grade);
sunny.issueGrades(susan);
console.log(susan.grade);
phil.issueGrades(susan);
console.log(susan.grade);
susan.graduation();





