const isPalindrome = (str,low,high) =>{
    return (low>=high) || (str.charAt(low) == str.charAt(high) && isPalindrome(str,low+1,high-1));
}

const isRotatedPalindrome = (str) => {
    if(str == null) {
        return false
    };
    var n = str.length;
    for (i=0;i<n;i++){
        
    if (isPalindrome(str,0,n-1)){
         return true;
        }
        str = str.substring(1) + str.charAt(0);
    }
    return false;
}

let result = isRotatedPalindrome("akkas");

console.log(result);