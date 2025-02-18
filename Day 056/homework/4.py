def number(stops):

    current_passengers = 0
    

    for on, off in stops:
        
        current_passengers += on 
        current_passengers -= off 

    return current_passengers


print(number([(10, 0), (3, 5), (5, 8)]))
print(number([(5, 0), (10, 5), (2, 3), (6, 8)]))