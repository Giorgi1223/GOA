name = input("Whats your name: ")
surname = input("Whats your surname: ")

info_list = []


info_list.append(name)
info_list.append(surname)

new_list = [name.capitalize() for name in info_list]


initials = '.'.join([name[0] for name in new_list])


print(initials)
