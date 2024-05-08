#3)შექმენით სია, სადაც გექნებათ 0-იდან 20-ის ჩათვლით 4-ის ჯერადები და პრინტით გამოიტანეთ უდიდესი.

list=[]
for i in range(0, 20+1):
    if i % 4 == 0:
        list.append(i)
print(list)
print(max(list))
