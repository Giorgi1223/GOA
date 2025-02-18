my_list = [2,5,1,313,63,123,5234]
even_list = []
odd_list = []

for i in range(len(my_list)):
  if my_list[i] % 2 == 0:
    even_list.append(my_list[i])
  else:
    odd_list.append(my_list[i])

print(even_list,odd_list)