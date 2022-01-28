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
const dictionary = new Map();
const input = "CFhelloLcompressionBAA";
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

console.log(result);