class Products:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity
    def get_total_value(self):
        return self.price*self.quantity
    def __str__(self):
        return f"{self.name} {self.price}"
class DiscountedProduct(Products):
    def __init__(self, name, price, quantity, discount):
        super().__init__(name, price, quantity)
        self.discount = discount
    def get_total_value(self):
        return self.price*self.quantity*self.discount

prod = Products("car", 400, 2)
disp = DiscountedProduct("bus", 500, 50, 0.5)

print(prod)
print(prod.get_total_value())
print("-"*30)
print(disp)
print(disp.get_total_value())

s = set(1,2,3)
s.append(1)
print(s)

