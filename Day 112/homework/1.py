import math

# StringUtils - დამხმარე კლასები string-ისთვის
class StringUtils:
    
    @staticmethod
    def reverse_string(s):
        """სტრინგის შეტრიალება"""
        return s[::-1]

    @staticmethod
    def compare_strings(s1, s2):
        """სტრინგების შედარება: რამდენი ასო ემთხვევა ორ სტრინგში"""
        common_count = sum(1 for a, b in zip(s1, s2) if a == b)
        return common_count

    @staticmethod
    def validate_string(s):
        """სტრინგის შემოწმება: აქვს თუ არა მხოლოდ ლათინური ასოები, რიცხვები და _"""
        return all(c.isalnum() or c == '_' for c in s)


# MathUtils - დამხმარე კლასები math-ისთვის
class MathUtils:

    PI = math.pi
    E = math.e
    DEFAULT_PRECISION = 2
    
    @staticmethod
    def factorial(n):
        """ფაქტორიული"""
        if n < 0:
            raise ValueError("არ შეიძლება უარყოფითი რიცხვის ფაქტორიული")
        return math.factorial(n)

    @staticmethod
    def ends_with_5_or_0(n):
        """მეთოდი, რომელიც აბრუნებს, არის თუ არა რიცხვი 5-ით ან 0-თ დამთავრებული"""
        return str(n)[-1] in ['0', '5']

    @staticmethod
    def round_to_nearest_5_or_0(n):
        """მეთოდი, რომელიც ამრგვალებს უახლოეს 5-ზე ან 0-ზე"""
        return round(n / 5) * 5

    @staticmethod
    def round_decimal(n, precision=DEFAULT_PRECISION):
        """მეთოდი რომელიც ათწილად რიცხვს ამრგვალებს და ათწილად ნაწილს DEFAULT_PRECISION-ის მიხედვით"""
        format_string = "{:." + str(precision) + "f}"
        return format_string.format(n)


# დემონსტრაცია:

# 1. StringUtils
s1 = "hello"
s2 = "heLlo"
print(f"Reversed string of '{s1}': {StringUtils.reverse_string(s1)}")
print(f"Matching characters between '{s1}' and '{s2}': {StringUtils.compare_strings(s1, s2)}")
print(f"Is '{s1}' valid (only latin letters, numbers, or _)? {StringUtils.validate_string(s1)}")

# 2. MathUtils
num = 5
print(f"Factorial of {num}: {MathUtils.factorial(num)}")
print(f"Does {num} end with 5 or 0? {MathUtils.ends_with_5_or_0(num)}")
print(f"{num} rounded to the nearest 5 or 0: {MathUtils.round_to_nearest_5_or_0(num)}")
print(f"Pi constant: {MathUtils.PI}")
print(f"E constant: {MathUtils.E}")
print(f"3.14159 rounded to 2 decimal places: {MathUtils.round_decimal(3.14159)}")
print(f"3.14159 rounded to 4 decimal places: {MathUtils.round_decimal(3.14159, 4)}")
