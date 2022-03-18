let fs = require("fs");
let doespathExist = fs.existsSync("abc.txt"); // if file exists give true otherwise fals
console.log(doespathExist);
let dtlsObj  = fs.lstatSync(__dirname + "//abc.js");
let  stat = dtlsObj.isFile();
console.log(stat);
let dtlsObj1  = fs.lstatSync("E:\\STUDY\\Pepcoding\\Java_Script");
let stat1=dtlsObj1.isDirectory();
console.log(stat1);