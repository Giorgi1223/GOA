word = input("Enter a word: ")
letter = input("Enter the letter you want to search for: ")

index = -1

for add, letter in enumerate(word):
    if letter == letter:
        index = add
        break

if index != -1:
    print(f"This letter is found first '{letter}' in the word '{word}' is: {index}")
else:
    print(f"The letter '{letter}' could not be found '{word}'. Index: -1")