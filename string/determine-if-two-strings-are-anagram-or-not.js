/* 
Given two sstring, determine whether they are anagrams.

Any word that exactly reproduces the letters in another order iss an anagram.

For example, all theaase pairs are anagrams as LHS can be rearranged to RHS and vice-versa:
silent = listen
incest = insect
throw = worth
*/

function anagram(str1,str2){
if (str1.length != str2.length) return false;
else {
	newStr1=str1.split('').sort().join('');
	newStr2=str2.split('').sort().join('');
	
	if(newStr1 == newStr2) return true;
    else return false;
}
}

var result = anagram("silent","listen");
console.log(result?"the given strings are anagram...":"strings are not anagram");