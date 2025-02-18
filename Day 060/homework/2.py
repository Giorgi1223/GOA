import re

def increment_string(s):
    match = re.search(r'(\d*)$', s)
    if match:
        num_part = match.group(1)
        if num_part == "":  
            return s + "1"
        else:
            num_length = len(num_part)  
            incremented_num = str(int(num_part) + 1).zfill(num_length)  
            return s[:match.start(1)] + incremented_num
    return s + "1"


