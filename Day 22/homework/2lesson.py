def manual_count(lst, element=None):
    if element is not None:
        count = 0
        for item in lst:
            if item == element:
                count += 1
        return count
    else:
        avg = int(sum(lst) / len(lst))
        return avg


my_list = [1, 2, 3, 4, 5, 3, 3]


print(manual_count(my_list, 3))  


print(manual_count(my_list)) 