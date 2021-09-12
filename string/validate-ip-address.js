/*
This code will discuss how to validate an IP address(IPv4) in JavaScript. A valid IPv4 address must be in the form os xxx.xxx.xxx.xxx,
where xxx is a number from 0-255.

For example,
'14.8.9.28''255.255.255.255''1.0.0.9' are valid IP addresses and

'100.xyz.1.15''115.300.10.60''50.35.6' are invalid IP addresses.
*/

const validateIP = (str) => {
    let ipArray = [];
    ipArray=str.split('.');
    for(i=0;i<ipArray.length;i++){
        if(isNaN(ipArray[i]) || 0>ipArray[i]>255){
        return "Invalid IP Address";
        }
    }
    return "Valid IP Address";

}

var result = validateIP("14.xyz.9.288");
console.log(result);