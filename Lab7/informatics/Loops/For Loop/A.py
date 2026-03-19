a = int(input())
b = int(input())
l = []
for i in range(a, b):
    if i%2==0:
        l.append(i)
print(*l)