import math

def findNextSquare(sq):
    # Check if the input is a perfect square
    if math.isqrt(sq)**2 == sq:
        # Find the next perfect square
        next_square = (math.isqrt(sq) + 1) ** 2
        return next_square
    else:
        # Return -1 if input is not a perfect square
        return -1

# Examples
print(findNextSquare(121))  # Output: 144
print(findNextSquare(625))  # Output: 676
print(findNextSquare(114))  # Output: -1
