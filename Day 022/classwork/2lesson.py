def manual_index(collection, element):
    count = 0
    for  item in collection:
        if item == element:
            count = count + 1


    return count


Names = ["gio", "luka", "nika", "gio", "dato", "gio"]


print(manual_index(Names, "gio"))