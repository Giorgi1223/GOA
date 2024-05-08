def num(num_list):
    total = 0
    for i in num_list:
        total = i + total
    return total

print(num([1,2,3,4,5,6,7,8,9]))        