def find_index(string, letter):
    for i, string in enumerate(string):
        if string == letter:
            return i
    return -1


list_string = "giorgi"
list_letter = "r"
print(find_index(list_string, list_letter))