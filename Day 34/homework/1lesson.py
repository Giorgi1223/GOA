def square_digits(num):
    to_return = ""
    for element in str(num):
        to_return = to_return + f'{int(element) * int(element)}'
    return int(to_return)  