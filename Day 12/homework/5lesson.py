#მომხმარებელს შემოატანინეთ აკადემიის სახელი. თუ ის "G"-თი იწყება, დაუპრინტეთ რომ გოა არის საუკეთესო არჩევანი.
#  სხვა შემთხვევაში დაუპრინტეთ, რომ არასწორი გადაწყვეტილება მიიღო.
User=input("Choose an academy: ")

if User.startswith("G"):
    print("Goa is the best academy")


else:
    print("You made the wrong decision")