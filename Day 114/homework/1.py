class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
    
    def start_engine(self):
        return f"{self.brand} {self.model} engine started."
    
    def stop_engine(self):
        return f"{self.brand} {self.model} engine stopped."

# კლასის გამოსატანად
print(Car)
