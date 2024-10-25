def remove_duplicates(input_list):
    my_list = []
    for item in input_list:
        if item not in my_list:
            my_list.append(item)
    return my_list

nums= [1, 2, 3, 4, 3, 2, 1, 5]
result = remove_duplicates(nums)
print(result)    


