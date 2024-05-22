def get_count(sentence):
    listn = ["a", "e", "i", "o", "u"]
    count = 0
    for i in listn:
        for letter in sentence:
            if i.lower() == letter.lower():
                count += 1
    return count