def sort_descending(n, arr):
    arr.sort(reverse=True) 
    print(*arr)  


n = int(input())  
arr = list(map(int, input().split()))  

sort_descending(n, arr)
