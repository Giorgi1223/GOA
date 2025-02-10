def count_first_char(s):
    if not s:  
        return 0
    first_char = s[0]  
    return s.count(first_char)  

# ტესტი:
print(count_first_char("apple")) 
print(count_first_char("banana"))
print(count_first_char(""))  