def is_balanced(s: str) -> int:
    stack = []
    for char in s:
        if char == '(':
            stack.append(char)
        elif char == ')':
            if not stack:
                return 0
            stack.pop()
    return 1 if not stack else 0


print(is_balanced("(olá (mundo))"))  
print(is_balanced("((((((olá (mundo)))))))")) 
print(is_balanced("hello world"))