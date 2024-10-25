def add(numbers):
    result = 0
    for i in numbers:
        result = i + result
    return result    
print(add([1,2,3,4,5,6,7,]))     




def num(num_list):
    numbers = 0
    for i in num_list:
        numbers = i + numbers
    return numbers
print(num([1,2,3,4,5,10,34]))     



def multipy(intengers):
    ints = 0
    for i in intengers:
        ints = i + ints
    return ints
print(multipy([1,5,3,7,8]))        


def print_odd_numbers(numbers):
    print("Odd numbers in the list:")
    for num in numbers:
        if num % 2 != 0:
            print(num)