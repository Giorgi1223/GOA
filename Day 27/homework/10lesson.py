def unique_elements(collection):

    unique_set = set()
    for item in collection:
        unique_set.add(item)
    return list(unique_set)

original_list = [1, 1, 1, 2, 3, 4]
new_list = unique_elements(original_list)
print(new_list)