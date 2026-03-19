from models import Animal, Dog, Cat


def main():
    animal = Animal("Generic Animal", 5, 10)
    dog = Dog("Rex", 3, 20, "Labrador")
    cat = Cat("Murka", 2, 5, "Black")

    animals = [animal, dog, cat]

    for a in animals:
        print(a)            
        print(a.eat())       
        print(a.move())
        print(a.speak())    
        print("-" * 30)

    print(dog.fetch())
    print(cat.climb())


if __name__ == "__main__":
    main()