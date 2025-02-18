def count_first_letter_occurrence(s):
    if not s:
        return 0
    first_letter = s[0]
    return s.count(first_letter)


print(count_first_letter_occurrence("banana"))  
