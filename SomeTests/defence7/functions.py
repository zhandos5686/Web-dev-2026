def remove_duplicates(num):
    num = list(set(num))
    newl = []
    for i in num:
        if(i not in newl):
            newl.append(i)            
    return newl
li = [1, 2, 2, 3, 1, 4]
print(remove_duplicates(li))

def reverse_string(text):
    ntext = ""
    for i in range(len(text)):
        ntext=ntext+text[-i-1]
    return ntext
text = "Hello"
print(reverse_string(text))

