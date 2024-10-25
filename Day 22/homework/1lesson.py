def manual_pop(lst, index=None):
    if index is not None:
        return lst[:index] + lst[index+1:]
    else:
        return lst[:-1]

my_list = [5, 6, 3, 2, 9]


print(manual_pop(my_list, 2)) 

print(manual_pop(my_list))  