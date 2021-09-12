/* 
Given a string, find all possible palindromic substring in it.

For example,
Input:  str = google
Output: e l g o oo goog
*/
 // Expand in both directions of `low` and `high` to find all palindromes
const expand = (str, low, high, palindromicSet) => {
     // run till `str[low.high]` is not a palindrome
     while (low >= 0 && high < str.length && str.charAt(low) == str.charAt(high))
     {
         // push all palindromes into a set
         palindromicSet.add(str.substring(low,high+1));
         low--;
         high++;
     }
 }
 // Function to find all unique palindromic substrings of a given string
 const findPalindromicSubstrings = (str) => {
     // base case
     if (str == null) {
         return;
     }
     // create an empty set to store all unique palindromic substrings
     const palindromicSet = new Set();
     for (i = 0; i < str.length; i++)
     {
         // find all odd length palindrome with `str[i]` as a midpoint
         expand(str, i, i, palindromicSet);
         // find all even length palindrome with `str[i]` and `str[i+1]` as its midpoints
         expand(str, i, i + 1, palindromicSet);
     }
    return palindromicSet;
 }
 
var result = findPalindromicSubstrings("google");
console.log(result);




