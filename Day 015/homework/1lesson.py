def name_lastname(names):

    names = names.split()

    first_initial = names[0][0]

    last_initial = names[-1][0]

    print("Initials:", first_initial + "." + last_initial)


input_name = input("Enter your name and lastname: ")
name_lastname(input_name)
