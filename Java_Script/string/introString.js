let singleQuotes = "single quotes ki string"
let doubleQuotes = "Double quotes ki string"
console.log(singleQuotes)
console.log(doubleQuotes)
let char = singleQuotes.charAt(4) // character at the given index
console.log(char)
let substr = singleQuotes.substring(2,8); // give substring of given string from 2 to 7 (end -1)
console.log(substr)
let ascii = singleQuotes.charCodeAt(4) // give ascii code of character
console.log(ascii)
let arrStr = singleQuotes.split("i");
console.log(arrStr)
let arrStr1 = singleQuotes.split("");
console.log(arrStr1)
let arrStr2 = singleQuotes.split(" "); // split on the basis of white space
console.log(arrStr2)
 
singleQuotes = singleQuotes.trim() // trim white spaces of starting and ending of string

let str = arrStr2.join("+"); // join the splited string on the basis of +.
console.log(str);




