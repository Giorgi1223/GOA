#4)შექმენით სია სადაც შეტანილი გექნებათ 30-იდან 50-ის ჩათვლით კენტი რიცხვები.
#  შემდეგ დაპტინტეთ სამი უმცირესი ელემენტის ჯამი.

list=[]
for i in range(30, 50+1):
    if i % 2 == 1:
        list.append(i)
print(list)    
print(list[0]+list[1]+list[2])    