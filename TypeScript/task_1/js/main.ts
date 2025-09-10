interface Teacher {
  readonly firstName: string; // read-only after initialization
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // optional
  location: string;
  [key: string]: any; // allow to add dynamic properties
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Directors inherits from Teacher and add a mandatory property number of reports
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

interface printTeacherFunction {
  // the function takes 2 string arguments and return a string
  (firstName: string, lastName: string): string;
};

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  // charAt(0) takes the first letter of the first name
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe"));

// interface that ensures that any object passed to the constructor has the firstName and lastName properties of type string
interface StudentConstructor {
  firstName: string;
  lastName: string;
};

// interface that includes the properties and methods that the class must have
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
};

// StudentClass class that implements the StudentClassInterface interface
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
};

const student1 = new StudentClass({ firstName: "John", lastName: "Doe" });
console.log(student1.workOnHomework());
console.log(student1.displayName());
