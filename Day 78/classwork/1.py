import random


students = [
    "giorgi papunashvili",
    "cotne nebieridze",
    "nikoloz kukava",
    "tornike tabukashvili",
    "giorgi chankvetadze",
    "mate okinashvili",
    "sandro suriakovi",
    "dimitri ugrexelidze",
    "cotne bajelidze",
    "ioane cercvadze",
    "lasha taziashvili",
    "davit chxikvidze",
    "nika suxishvili"
]


leaders = [
    "deme goisashvili",
    "nika chavleishvili",
    "dato beruashvili"
]


random.shuffle(students)


num_groups = 3
group_size = len(students) // num_groups
groups = [students[i * group_size:(i + 1) * group_size] for i in range(num_groups)]


remaining_students = students[num_groups * group_size:]
if remaining_students:
    groups[-1].extend(remaining_students)


for i in range(num_groups):
    groups[i].insert(0, leaders[i])


for d, group in enumerate(groups, 1):
    print(f"ჯგუფი {d} (ლიდერი: {group[0]}): {', '.join(group[1:])}")
