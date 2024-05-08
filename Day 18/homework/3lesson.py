word = input("Enter Your Word: ")
words = " "
for word, letter in enumerate(word):
    if word % 2 == 0:
        words += letter.upper()
    else:
        words += letter.lower() 

print(words)        