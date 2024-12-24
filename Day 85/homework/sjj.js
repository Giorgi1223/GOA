
let N = parseInt(prompt("შეიყვანეთ რიცხვების რაოდენობა:"), 10);


let array = [];
for (let i = 0; i < N; i++) {
    let num = parseInt(prompt(`შეიყვანეთ რიცხვი ${i + 1}:`), 10);
    array.push(num);
}


if (N > 1) { 
    let temp = array[0];
    array[0] = array[N - 1];
    array[N - 1] = temp;
}

console.log("ნავაჭრევი მასივი:");
console.log(array);
