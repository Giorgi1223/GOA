
let students = [
    { name: "მარიამი", age: 18, grade: "A" },
    { name: "დავით", age: 20, grade: "B" },
    { name: "ანა", age: 22, grade: "A+" }
];


for (let index in students) {
    console.log(`Student ${parseInt(index) + 1}:`);
    for (let key in students[index]) {
        console.log(`${key}: ${students[index][key]}`);
    }
    console.log('---');
}


for (let student of students) {
    console.log(`Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`);
    console.log('---');
}
