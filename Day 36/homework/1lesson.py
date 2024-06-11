# Step 1: Create Dictionaries
my_info = {
    "name": "Giorgi",
    "surname": "Chankvetadze",
    "age": 15,
    
}

friend_info = {
    "name": "Nika",
    "surname": "Kifshidze",
    "age": 15,
    
}

family_member1_info = {
    "name": "Temo",
    "surname": "Chankvetadze",
    "age": 35,
}

family_member2_info = {
    "name": "Tamo",
    "surname": "Guruli",
    "age": 35
}

# Step 2: Create Empty Lists
my_info_list = []
friend_info_list = []
family_member1_list = []
family_member2_list = []

# Step 3: Add Dictionary Values to Lists Using For Loops
for value in my_info.values():
    my_info_list.append(value)

for value in friend_info.values():
    friend_info_list.append(value)

for value in family_member1_info.values():
    family_member1_list.append(value)

for value in family_member2_info.values():
    family_member2_list.append(value)

# Step 4: Combine All Lists Together
combined_list = my_info_list + friend_info_list + family_member1_list + family_member2_list

# Output the final combined list
print(combined_list)

