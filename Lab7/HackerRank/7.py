if __name__ == '__main__':
    n = int(input())
    total = 0
    len = n
    for i in range(1, n+1):
        total =+ i*(10**len);
        len=-1
    print(total)