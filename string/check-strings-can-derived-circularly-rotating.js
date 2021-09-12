/*
Check if given string can be derived from another string by circularly rotating it. The rotation can be in
a clockwise or anti-clockwise rotation.

for example,
Input:
X = ABCD
Y = DABC
Output: Yes
Y can be derived from X by right-rotating it by 1 unit
 */
const checkDerivedPosibilities = (X,Y) => {
    // base case & if string lengths are different, they can't be derived from each other
    if (X == null || Y == null || X.length != Y.length) {
        return false;
    }
    for (i = 0; i < X.length; i++)
    {
        // left rotate string `X` by 1 unit
        X = X.substring(1) + X.charAt(0);
        if (X === Y) {
            return true;
        }
    }
    return false;
}

var result = checkDerivedPosibilities("ABCD", "DABC");
console.log(result ? "Given strings can be derived from each other":"Given strings cannot be derived from each other");