def words(arr):
    words = []
    for i in range(len(arr)):
        if i % 2 == 0:  
            words.append(name.upper())
        else:
            words.append(name.lower())
    return words


words = (["AlsaaaeSAice", "BSSdsasS", "CJasksjAJ", "SAHdusai", "GAaha"])

print(words)