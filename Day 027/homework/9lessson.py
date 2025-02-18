def merge_lists(list1, list2):
    merged_list = list(set(list1 + list2))
    return merged_list    


list1 = [1, 1, 1, 2, 3, 4]
list2 = [1, 2, 3, 4, 5, 5, 6]
merged = merge_lists(list1, list2)
print(merged)    