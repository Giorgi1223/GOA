def order(s):
    if not s:
        return ""
    
    # Split the string into words
    words = s.split()
    
    numbered_words = []
    
    for word in words:
        number = int(next(char for char in word if char.isdigit()))
        numbered_words.append((number, word))

    sorted_words = [word for number, word in sorted(numbered_words)]
    
    return ' '.join(sorted_words)


print(order("is2 the3 best1"))   
print(order("4of5 the2 are1 how3"))  
print(order(""))  