import re

def increment_string(s):
    # Use regular expression to find the trailing number
    match = re.search(r'(\d*)$', s)
    
    if match:
        # Extract the number part
        num_str = match.group(0)
        
        if num_str:
            # Convert the number part to an integer
            num = int(num_str)
            # Increment the number
            num += 1
            
            # Format the number with leading zeros to match the original length
            new_num_str = str(num).zfill(len(num_str))
            
            # Return the string with the incremented number
            return s[:match.start()] + new_num_str
        else:
            # If there is no number at the end, append '1'
            return s + '1'
    else:
        # If no number found, append '1'
        return s + '1'


