class Animal {
    constructor(name, type, habitat, diet, interestingFact) {
      this.name = name;
      this.type = type;
      this.habitat = habitat;
      this.diet = diet;
      this.interestingFact = interestingFact;
    }
  
    displayInfo() {
      return `
        <div class="animal-info">
          <h2>${this.name}</h2>
          <p><strong>Type:</strong> ${this.type}</p>
          <p><strong>Habitat:</strong> ${this.habitat}</p>
          <p><strong>Diet:</strong> ${this.diet}</p>
          <p><strong>Interesting Fact:</strong> ${this.interestingFact}</p>
        </div>
      `;
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const animalContainer = document.getElementById('animal-container');
  
    // Array of animal instances
    const lion = new Animal(
      'Lion',
      'Mammal',
      'Savanna, grasslands',
      'Carnivore',
      'Lions are the only cats that live in groups.'
    );
  
    const eagle = new Animal(
      'Eagle',
      'Bird',
      'Mountains, forests',
      'Carnivore',
      'Eagles have excellent eyesight that can see up to 8 times better than humans.'
    );
  
    const shark = new Animal(
      'Shark',
      'Fish',
      'Oceans',
      'Carnivore',
      'Sharks have been around for over 400 million years.'
    );
  
    const animals = [lion, eagle, shark];
  
    animals.forEach(animal => {
      animalContainer.innerHTML += animal.displayInfo();
    });
  });
  