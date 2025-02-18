def find_duplicates(lst):
    count_dict = {}
    duplicates = []
    for item in lst:
        if item in count_dict:
            count_dict[item] += 1
        else:
            count_dict[item] = 1
    for key, value in count_dict.items():
        if value > 1:
            duplicates.append(key)
    return duplicates


my_list = [1, 2, 3, 4, 5, 2, 3, 6, 7, 5]
print("Duplicates:", find_duplicates(my_list))