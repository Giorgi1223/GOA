def my_INFO(Name, value_to_find):
    for names in range(len(Name)):
        if Name[names] == value_to_find:
            return names


print(my_INFO(["Gio", "Nika", "Luka"], "Nika"))