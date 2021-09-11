const checkPalindrome = (str, low, high) => {
    while (low >= 0 && high < str.length &&  (str.charAt(low) == str.charAt(high))) {
            low--;
            high++;
    }
    return str.substring(low+1, high);
}
const findLongestPalindromeSubstring = (str) => {
    if (str == null || str.length == 0) return str ;
    let max_str ="", max_length=0, current_str="", current_str_length;

    for(i=0;i<str.length;i++){
       //logic to check palindrome if palindrome length is odd
        current_str = checkPalindrome(str, i, i);
        current_str_length = current_str.length;

        if(current_str_length>max_length)
        {
            max_length=current_str_length;
            max_str = current_str;
        }
        //logic to check palindrome if palindrome length is even
        current_str = checkPalindrome(str, i, i+1);
        current_str_length = current_str.length;

        if(current_str_length>max_length)
        {
            max_length=current_str_length;
            max_str = current_str;
        }
    }
    return max_str;
}

let result = findLongestPalindromeSubstring("bananas");
console.log(result);