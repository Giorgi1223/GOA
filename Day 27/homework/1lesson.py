def multiply_and_create_new_list(numbers):
    new_list = []
    for num in numbers:
        if num.is_integer():
            new_list.append(num * 2)
        else:
            new_list.append(num * 4)
    return new_list

numbers = [10, 5.3, 3, 4.7, 50]
result = multiply_and_create_new_list(numbers)
print(result)    