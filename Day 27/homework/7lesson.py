def count_occurrences(collection, search_word):
    count = 0
    for item in collection:
        if item == search_word:
            count += 1
    return count


my_collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
search_word = 3
occurrences = count_occurrences(my_collection, search_word)
print("საძიებელი სიტყვა", search_word, "კოლექციაში გვხვდება", occurrences, "ჯერ.")