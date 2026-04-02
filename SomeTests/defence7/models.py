class Vehicle:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year
    def get_info(self):
        return f"{self.brand}, {self.model}, {self.year}"
    def start(self):
        return "Vehicle started"
class Car(Vehicle):
    def __init__(self, brand, model, year, num_doors):
        super().__init__(brand, model, year)
        self.num_doors = num_doors
    def start(self):
        return "Car engine started"
class Motorcycle(Vehicle):
    def __init__(self, brand, model, year):
        super().__init__(brand, model, year)
    def start(self):
        return "Motorcycle engine started"
    
c = Car("Mers", "e220", 2002, 4)
m = Motorcycle("Bike", "m3", 2020)
print(c.get_info())
print(c.start())
print("-"*50)
print(m.get_info())
print(m.start())
