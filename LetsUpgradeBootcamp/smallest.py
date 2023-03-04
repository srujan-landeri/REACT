li = [5,7,9,14,10,20,4]

def fun(li):
    smallest = li[0]

    for i in li:
        if i < smallest:
            smallest = i
    return smallest

print(fun(li))