def get_box_properties(length, width, height):
    surface_area = 2 * (length * width + width * height + height * length)
    volume = length * width * height
    return [surface_area, volume]

print(get_box_properties(2, 3, 4))  
print(get_box_properties(5, 5, 5))  
