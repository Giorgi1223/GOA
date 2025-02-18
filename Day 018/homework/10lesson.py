words_list = []

for i in range(5):
    word = input("Enter a word: ")
    words_list.append(word)

sign = input("Enter  your sign: ")


index = ""

for i, word in enumerate(words_list):
    if i % 2 == 0:
        index += word + sign


print(index)