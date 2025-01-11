
let counterValue = 0;


if (localStorage.getItem('counter')) {
  counterValue = parseInt(localStorage.getItem('counter'));
  document.getElementById('counterValue').textContent = counterValue;
}


function updateCounter() {
  localStorage.setItem('counter', counterValue);
  document.getElementById('counterValue').textContent = counterValue;
}


document.getElementById('increaseButton').addEventListener('click', function() {
  counterValue++;
  updateCounter();
});

document.getElementById('decreaseButton').addEventListener('click', function() {
  counterValue--;
  updateCounter();
});

document.getElementById('resetButton').addEventListener('click', function() {
  counterValue = 0;
  updateCounter();
});
