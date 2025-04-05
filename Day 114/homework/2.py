class Animals:
    def __init__(self, animal_sounds):
        self.animal_sounds = animal_sounds
    
    def make_sound(self):
        for animal, sound in self.animal_sounds.items():
            print(f"{animal} makes {sound}")


animal_sounds = {
    "Dog": "Bark",
    "Cat": "Meow",
    "Cow": "Moo",
    "Sheep": "Baa",
    "Duck": "Quack"
}

animals = Animals(animal_sounds)
animals.make_sound()