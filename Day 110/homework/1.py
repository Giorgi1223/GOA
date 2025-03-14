
rows = 7
cols = 6


matrix = []

print("შეიტანეთ 7x6 ზომის რიცხვები:")

for i in range(rows):
    row = []
    for j in range(cols):

        row.append(int(input(f"შეიტანეთ რიცხვი პოზიციაზე ({i+1}, {j+1}): ")))
    matrix.append(row)




print("თითოეული სტრიქონის საშუალო არითმეტიკული:")
for i in range(rows):
    row_average = sum(matrix[i]) / len(matrix[i])
    print(f"სტრიქონი {i+1}: {row_average}")


print("თითოეული სვეტის საშუალო არითმეტიკული:")
for j in range(cols):
    col_sum = 0
    for i in range(rows):
        col_sum += matrix[i][j]
    col_average = col_sum / rows
    print(f"სვეტი {j+1}: {col_average}")
