def get_issuer(card_number):
    card_str = str(card_number)
    length = len(card_str)

    if length == 15 and (card_str.startswith('34') or card_str.startswith('37')):
        return "AMEX"
    

    if length == 16 and card_str.startswith('6011'):
        return "Discover"
    

    if length == 16 and (card_str.startswith('51') or card_str.startswith('52') or
                         card_str.startswith('53') or card_str.startswith('54') or
                         card_str.startswith('55')):
        return "Mastercard"
    
    if length in (13, 16) and card_str.startswith('4'):
        return "VISA"
    

    return "Unknown"


print(get_issuer(4111111111111111))  # Output: "VISA"
print(get_issuer(4111111111111))     # Output: "VISA"
print(get_issuer(4012888888881881))  # Output: "VISA"
print(get_issuer(378282246310005))   # Output: "AMEX"
print(get_issuer(6011111111111117))  # Output: "Discover"
print(get_issuer(5105105105105100))  # Output: "Mastercard"
print(get_issuer(5105105105105106))  # Output: "Mastercard"
print(get_issuer(9111111111111111))  # Output: "Unknown"