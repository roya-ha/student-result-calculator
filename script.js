const studentName = "Sara";
let studentAge = 20;
let mathMarks = 90;
let englishMarks = 94;
let computerMarks = 80;

let totalMarks = mathMarks + englishMarks + computerMarks;
console.log("Total Marks: ", totalMarks);

let averageMarks = totalMarks / 3;
console.log("Average Marks: ", averageMarks);

let maxMarks = 300;
console.log("Highest Total Marks: ", maxMarks);

let marksLeft = maxMarks - totalMarks;
console.log("Remaining Marks: ", marksLeft);

if (studentAge > 18) {
  console.log("True");
} else {
  console.log("False");
}

if (mathMarks > 80) {
  console.log("True");
} else {
  console.log("False");
}

if (englishMarks == 100) {
  console.log("True");
} else {
  console.log("False");
}

if (computerMarks != 50) {
  console.log("True");
} else {
  console.log("False");
}

if (averageMarks >= 50) {
  console.log("True");
} else {
  console.log("False");
}

if (averageMarks > 100 || averageMarks < 0) {
  console.log("Invalid marks");
} else if (averageMarks >= 90) {
  console.log("Student Grade: A");
} else if (averageMarks >= 80) {
  console.log("Student Grade: B");
} else if (averageMarks >= 70) {
  console.log("Student Grade: C");
} else if (averageMarks >= 60) {
  console.log("Student Grade: D");
} else if (averageMarks >= 50) {
  console.log("Student Grade: E");
} else {
  console.log("Student failed");
}
