import sys

for i in range(1, len(sys.argv)):
    curr = int(sys.argv[i])
    if (curr%3 == 0 and curr%5 == 0):
        print("fizzbuzz")
    elif (curr%3 == 0):
        print("fizz")
    elif (curr%5 == 0):
        print("buzz")
    else:
        print(str(curr))