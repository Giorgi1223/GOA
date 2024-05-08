def get_length(listn):
    length = 0
    for E in listn:
        length += 1
    return length


my_list = [1, "luka", 2, 3, "gio", 4, 5, "cat", 6]
print(get_length(my_list))