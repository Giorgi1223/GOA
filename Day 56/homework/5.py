def unique_in_order(sequence):
 
    result = []
    
  
    for element in sequence:
       
        if not result or result[-1] != element:
            result.append(element)
    
    return result


print(unique_in_order('AAAABBBCCDAABBB'))  
print(unique_in_order([1, 2, 2, 3, 3, 2, 1]))  
print(unique_in_order([1, 1, 1, 1, 1]))      
print(unique_in_order([]))                   
