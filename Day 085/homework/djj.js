let N = parseInt(prompt("შეიყვანეთ რიცხვების რაოდენობა:"), 10);


let array = [];
for (let i = 0; i < N; i++) {
    let num = parseInt(prompt(`შეიყვანეთ რიცხვი ${i + 1}:`), 10);
    array.push(num);
}


console.log("შებრუნებული თანმიმდევრობა:");
for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}
