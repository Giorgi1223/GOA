age = int(input("please enter your age: "))

if age >= 0 and age < 13:
    print("you are kid")

elif age >= 13 and age < 18:
    print("you are teenage")

elif age >= 18 and age <60:
    print("you are adult")

else:
    print("you are old ")

