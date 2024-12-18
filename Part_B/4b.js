const students = [
    { name: "John", marks: 85 },
    { name: "Jane", marks: 92 },
    { name: "Alice", marks: 75 },
    { name: "Bob", marks: 88 },
    { name: "Charlie", marks: 95 }
];

students.forEach(student => {
    let CGPA = (student.marks / 10).toFixed(2);
    console.log(`${student.name} - Marks: ${student.marks}, CGPA: ${CGPA}`);
});

let highCGPAStudents = students
    .map(student => ({
        ...student,
        CGPA: parseFloat((student.marks / 10).toFixed(2))
    }))
    .filter(student => student.CGPA >= 9);

console.log("\nStudents with CGPA 9 or higher:");
highCGPAStudents.forEach(student => 
    console.log(`${student.name} - CGPA: ${student.CGPA}`)
);
let count = highCGPAStudents.reduce((total, student) => total + 1, 0);
console.log(`\nTotal count of students with CGPA 9 and above: ${count}`);
