def sum_digits(n):
    result = 0
    n = abs(n)  # კონვერტაცია დადებით რიცხვად
    while n > 0:
        result += n % 10
        n //= 10
    return result

print(sum_digits(123)) 
print(sum_digits(405))  
print(sum_digits(-123))  
