def matrix_sum(matrix1, matrix2):
    # ვამოწმებთ, რომ მატრიცები ერთნაირი ზომისაა
    if len(matrix1) != len(matrix2) or len(matrix1[0]) != len(matrix2[0]):
        raise ValueError("მატრიცების ზომები არ ემთხვევა")
    
    # ვახორციელებთ ჯამს
    result = []
    for i in range(len(matrix1)):
        row = []
        for j in range(len(matrix1[0])):
            row.append(matrix1[i][j] + matrix2[i][j])
        result.append(row)
    
    return result

# მაგალითად:
matrix1 = [[1, 3], [1, 4]]
matrix2 = [[4, 1], [2, 2]]
result = matrix_sum(matrix1, matrix2)

print(result)