def filter_list(l):
    list1 = []
    for element in l:
        if type(element) == int:
            list1.append(element)
    return list1 