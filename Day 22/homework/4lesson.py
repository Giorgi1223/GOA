def manual_max(lst=None):
    if lst is not None:
        max_value = lst[0]
        for num in lst[1:]:
            if num > max_value:
                max_value = num
        return max_value
    else:
        lst = list(range(1, 11))
        max_value = lst[0]
        for num in lst[1:]:
            if num > max_val:
                max_value = num
        return max_value


print(manual_max([42442, 43839, 232522, 234254, 1324]))  
