/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

// Creating a teacher
const teacher: Subjects.Teacher = {
    firstName: "Guillaume",
    lastName: "Salva",
    experienceTeachingC: 10,
    experienceTeachingJava: 5,
    experienceTeachingReact: 0,
};

// Instantiation of materials
const cpp = new Subjects.Cpp();
cpp.setTeacher(teacher);

const java = new Subjects.Java();
java.setTeacher(teacher);

const react = new Subjects.React();
react.setTeacher(teacher);

// Testing methods
console.log("Cpp:");
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("\nJava:");
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log("\nReact:");
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
