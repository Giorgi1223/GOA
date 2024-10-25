def remove_even_numbers(list1, list2):
    result = []
    for num in list1 + list2:
        if num % 2 != 0:
            result.append(num)
    return result

list1 = [1, 5, 8]
list2 = [2, 3, 4]
new_list = remove_even_numbers(list1, list2)
print(new_list)
