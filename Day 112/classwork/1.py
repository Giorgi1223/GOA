#Rstrip

def manual_rstrip(s, chars=" "):
    i = len(s) - 1
    while i >= 0 and s[i] in chars:
        i -= 1
    return s[:i+1]


print(manual_rstrip("  hello  "))
print(manual_rstrip("test!!!", "!"))




def manual_lstrip(s, chars=" "):
    i = 0
    while i < len(s) and s[i] in chars:
        i += 1
    return s[i:]


print(manual_lstrip("  hello  "))
print(manual_lstrip("###test###", "#"))
