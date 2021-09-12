/*
Given a positive number, convert the number and generate the corresponding excel column name.

For example,
A -1 
Z - 25
ZW - 699
ZX - 700
*/

// Function to convert a given number to an Excel column
const getColumnName = (n) =>{
    var index;
        // initialize output string as empty
        var result = "";
        while (n > 0)
        {
            // find the index of the next letter and concatenate the letter to the solution
            // here index 0 corresponds to `A`, and 25 corresponds to `Z`
            index = (n - 1) % 26;
            result += (String.fromCharCode(index+ "A".charCodeAt(0)));
            n = Math.floor((n -1)/26);
        }
        return result;
    }
 
 // generate column names for 10 random numbers between 1–1000
 for (i = 1; i <= 10; i++)
 {
       var r = Math.floor(Math.random()*(1000-1+1)+1);
       console.log(r + " — " + getColumnName(r));
  }
    

