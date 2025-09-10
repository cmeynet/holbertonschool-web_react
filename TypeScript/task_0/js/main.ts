interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Marc",
  lastName: "Martin",
  age: 35,
  location: "Bordeaux"
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Dylan",
  age: 36,
  location: "Kingston"
};

const studentsList: Student[] = [student1, student2];

// Create table
const table = document.createElement("table");
const tbody = document.createElement("tbody");

// Fill in the table with student data
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

// Add the table to the page
table.appendChild(tbody);
document.body.appendChild(table);
