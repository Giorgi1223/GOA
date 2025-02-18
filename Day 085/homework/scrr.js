
let N = prompt("შეიყვანეთ რიცხვების რაოდენობა:");


let array = [];
for (let i = 0; i < N; i++) {
    let num = parseInt(prompt(`შეიყვანეთ რიცხვი ${i + 1}:`), 10);
    array.push(num);
}


console.log("კენტ ინდექსებზე მყოფი ელემენტები:");
for (let i = 1; i < N; i += 2) {
    console.log(array[i]);
}
