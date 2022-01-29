/**

 hello
 compression
 +--dictionary-----+
 |                 |
 CFhelloLcompressionBAA
 ||     |           | |
 ||     |           +-+----- compressed text
 ||     |
 ||     +-- word length: 11
 |+-------- word length: 5
 +--------- number of entries: 2

 A -> hello
 B -> compression
 BAA -> 'compressionhellohello'

 AA -> hellohello
 B  -> compression
 C  -> X

 **/
 const input1 = "CFhelloLcompressionBAA";
 const input2 = "CFhelloLcompressionBCAA";
 const input3 = "DFhelloLcompressionHwelcomeBAAC";
 const input4 = "CFhelloLcompressionBAAAAC";
  
 function compressionDictionary (input) {	 
 const dictionary = new Map();
 let result="";
 let entries = input.charCodeAt(0)-65;
 let start=2;
 let end=input.charCodeAt(1)-65;
 
 for(i=0;i<entries;i++){
	 dictionary.set(String.fromCharCode(65+i), input.slice(start,start+end));
	 start=start+end+1;
	 end=input.charCodeAt(start-1)-65;
 }
 
 const pattern = input.slice(start-1);
 
 for(i=0;i<pattern.length;i++){
	 if(dictionary.get(pattern[i]) == undefined){
		 result=result+"X";
	 }
	 else{
	 result=result+dictionary.get(pattern[i]);
	 }
 }

 return result;
 }
 
 console.log("Result for '"+input1+"' as input -> "+ compressionDictionary (input1));
 console.log("Result for '"+input2+"' as input -> "+ compressionDictionary (input2));
 console.log("Result for '"+input3+"' as input -> "+ compressionDictionary (input3));
 console.log("Result for '"+input4+"' as input -> "+ compressionDictionary (input4));