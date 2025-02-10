
export function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  export function generateRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
  }
  