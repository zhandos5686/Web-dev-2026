a = int(input())
b = int(input())
c = int(input())
d = int(input())
li = []
for i in range(a, b):
    if(i%d==c):
        li.append(i)
print(*li)