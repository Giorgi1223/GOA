#მომხმარებელს შემოატანინეთ სახელი, გვარი, ასაკი და საცხოვრებელი ადგილი.
#  თითოეული მათგანი append-ის გამოყენებით დაამატეთ სიაში.
#  slicing-ის გამოყენებით დაბეჭდეთ 1: სახელი, გვარი, 2: გვარი, ასაკი,
#  3: სახელი, გვარი, ასაკი 4: გვარი, ასაკი, საცხოვრებელი ადგილი.

name=input("whats your name :")
lastname=input("whats your last  name :")
Age=input("whats your age :")
Dwelling_Place=input("Where do you live :")

info = [] 

info.append(name)
info.append(lastname)
info.append(Age)
info.append(Dwelling_Place)

print(info)

print(info[0:2])
print(info[1:3])
print(info[0:3])
print(info[1:4])