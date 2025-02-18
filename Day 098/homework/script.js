let userName = '';
let userScore = 0;
let difficulty = 1;
let randomNumber = generateRandomNumber(difficulty);

const initialScreen = document.getElementById('initialScreen');
const gameScreen = document.getElementById('gameScreen');
const startButton = document.getElementById('startButton');
const userDisplayName = document.getElementById('userDisplayName');
const userScoreElement = document.getElementById('userScore');
const difficultyLevelElement = document.getElementById('difficultyLevel');
const guessNumberInput = document.getElementById('guessNumber');
const checkAnswerButton = document.getElementById('checkAnswerButton');
const difficultyMessage = document.getElementById('difficultyMessage');
const colorPicker = document.getElementById('colorPicker');


startButton.addEventListener('click', function() {
  userName = document.getElementById('userName').value;
  if (userName) {
    localStorage.setItem('userName', userName);
    localStorage.setItem('userScore', userScore);
    localStorage.setItem('difficulty', difficulty);
    
    userDisplayName.textContent = userName;
    initialScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    
    userScore = parseInt(localStorage.getItem('userScore')) || 0;
    difficulty = parseInt(localStorage.getItem('difficulty')) || 1;

    userScoreElement.textContent = userScore;
    difficultyLevelElement.textContent = difficulty;
  }
});


colorPicker.addEventListener('input', function() {
  document.body.style.backgroundColor = colorPicker.value;
});


checkAnswerButton.addEventListener('click', function() {
  const guess = parseInt(guessNumberInput.value);
  if (guess === randomNumber) {
    userScore++;
    difficulty++;
    randomNumber = generateRandomNumber(difficulty);
    

    localStorage.setItem('userScore', userScore);
    localStorage.setItem('difficulty', difficulty);

    userScoreElement.textContent = userScore;
    difficultyLevelElement.textContent = difficulty;
    difficultyMessage.textContent = `თქვენი შემდეგი გამოცნობა: ${randomNumber - 1}-${randomNumber}`;
    guessNumberInput.value = '';
  } else {
    alert('გადაწყვიტე!');
  }
});


function generateRandomNumber(difficulty) {
  return Math.floor(Math.random() * Math.pow(2, difficulty)) + 1; 
}
