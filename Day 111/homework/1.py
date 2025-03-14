def shift_letters_right(s):
    max_index = 0
    shifted = {}
    
    for char in s:
        index = ord(char) - ord('A')
        max_index = max(max_index, index)
        shifted[index] = char
    
    result = [' '] * (max_index + 1)
    
    for idx, char in shifted.items():
        result[idx] = char
    
    return ''.join(result)

print(shift_letters_right("AZ"))
print(shift_letters_right("ABC"))
print(shift_letters_right("ACE"))
print(shift_letters_right("CBA"))
print(shift_letters_right("HELLOWORLD"))
