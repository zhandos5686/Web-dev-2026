class Animal:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def speak(self):
        return self.name+" speaking"
    def __str__(self):
        return f"{self.name} is {self.age} years old"

class Dog(Animal):
    def __init__(self, name, age):
        super().__init__(name, age)
    def speak(self):
        return f"{self.name} speaks Woof"
class Cat(Animal):
    def __init__(self, name, age):
        super().__init__(name, age)
    def speak(self):
        return f"{self.name} speaks Meow" 
    
dog =  Dog("rex", 8)
cat = Cat("Mur", 3)
animals = [dog, cat]
for a in animals:
    print(a.speak())
    print(a)
