def function_palindrome(s):
    if not s:
        return ""
    
    longest = ""
    
    for i in range(len(s)):
        for left, right in [(i, i), (i, i + 1)]:
            while left >= 0 and right < len(s) and s[left] == s[right]:
                left -= 1
                right += 1
            palindrome = s[left + 1:right]
            if len(palindrome) > len(longest):
                longest = palindrome
    
    return longest

print(function_palindrome("lalad"))
print(function_palindrome("cbbd"))
