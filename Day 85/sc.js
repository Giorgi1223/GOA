
let array = [];


for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt(`შეიყვანეთ რიცხვი ${i + 1}:`), 10);
    array.push(num);
}


console.log("გაორმაგებული რიცხვები:");
for (let i = 0; i < array.length; i++) {
    console.log(array[i] * 2);
}
