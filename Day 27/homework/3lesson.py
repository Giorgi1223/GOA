def letter(arr):
    words = arr.split()
    capitalized_words = [word.capitalize() for word in words]
    capitalized_sentence = ' '.join(capitalized_words)
    return capitalized_sentence

arr = "my name is giorgi."
capitalized_sentence = letter(arr)
print(capitalized_sentence)