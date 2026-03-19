class Animal:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def eat(self):
        return f"{self.name} is eating"

    def move(self):
        return f"{self.name} is moving"

    def speak(self):
        return f"{self.name} makes a sound"

    def __str__(self):
        return f"Name: {self.name}, Age: {self.age}, Weight: {self.weight}"


class Dog(Animal):
    def __init__(self, name, age, weight, breed):
        super().__init__(name, age, weight)
        self.breed = breed

    def speak(self):  
        return f"{self.name} says: Woof!"

    def fetch(self):
        return f"{self.name} is fetching the ball"


class Cat(Animal):
    def __init__(self, name, age, weight, color):
        super().__init__(name, age, weight)
        self.color = color

    def speak(self):  
        return f"{self.name} says: Meow!"

    def climb(self):
        return f"{self.name} is climbing a tree"