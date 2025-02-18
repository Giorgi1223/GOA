def manual_min(lst=None):
    if lst is not None:
        min_value = lst[0]
        for num in lst[1:]:
            if num < min_value:
                min_value = num
        return min_value
    else:
        lst = list(range(1, 11))
        min_value = lst[0]
        for num in lst[1:]:
            if num < min_value:
                min_value = num
        return min_value


print(manual_min([4, 7, 2, 9, 1])) 
print(manual_min()) 
