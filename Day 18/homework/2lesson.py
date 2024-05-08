word = input("Enter your word: ")
counter = 1

for letter in word:
    if letter.islower():
        print("Some letters are lowercase. Please enter the word again.")
        counter += 1
        word = input("Enter your word again: ")


print("You had to enter the word", counter, "times.")        