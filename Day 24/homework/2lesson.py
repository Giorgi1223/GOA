#2. თქვენ მუშაობთ რიცხვების სიაზე, შესაძლოა გქონდეთ როგორც მთელი რიცხვები, ასევე ათწილადები.
#  დავალებაა, რომ დააბრუნოთ სიის რიცხვების ჯამი, მაგრამ  ამ ჯამში არ შევა მაქსიმალური და მინიმალური მნიშვნელობები.


num = int(input("Pls enter your number: "))
numbers = []
for i in range (1 , num+1):
    if num % i == 0:
        numbers.append (i)
print (numbers)