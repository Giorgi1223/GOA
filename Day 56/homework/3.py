def switcheroo(s):
    
    translation_table = str.maketrans('ab', 'ba')
    

    result = s.translate(translation_table)
    
    return result

# Example usage
print(switcheroo('acb'))
print(switcheroo('aabacbaa'))
