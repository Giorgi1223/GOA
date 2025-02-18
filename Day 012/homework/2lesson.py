#მომხმარებელს შემოატანინეთ უარყოფითი რიცხვი.
#  ამ რიცხვიდან 0-მდე არსებული ყველა უარყოფითი რიცხვი დაამატეთ სიაში და საბოლოოდ დაბეჭდეთ სია.

num = int(input("Choose a negative number: "))

my_list = []
for i in range(num, 0):
    my_list.append(i)

print(my_list)    
