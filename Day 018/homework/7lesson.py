Word = input("Enter your word: ")
letter = input("Enter your letter: ")

index = Word.find(letter)


if index != -1:
    print(f"This letter is found first '{letter}' in the word '{Word}' is: {index}")
else:
    print(f"The letter '{letter}' could not be found '{Word}'. Index: -1")