console.log("hi i am here");
let fs = require("fs");
let buffer = fs.readFileSync("abc.js");
console.log("output in binary formate",buffer);// this will read file in binary formate
//console.log("out is " + buffer); // this will read file in human readable formate

// we can open a file in write mode , if file doesn't exists it creates one.
fs.openSync("abc.txt","w");
fs.writeFileSync("abc.txt","hum aj khush nahi hai");// this will write in the file and replace content
fs.appendFileSync("abc.txt","bhai khush kyon nahi hai");// this append content to the file.
// we can make a directory
//fs.mkdirSync("meriDirectoty");
//we can make file in the directory
fs.writeFileSync("meriDirectory/meriFile.txt","mera content");
// we can delete  files
let files = fs.readdirSync("meriDirectory");// gives array of files of a directory
console.log(files);
for(let i=0;i<files.length;i++){
    console.log("file",files[i],"removed");
    fs.unlinkSync("meriDirectory/" + files[i]); // this will remove file.
}
// we can remove folder
fs.rmdirSync("meriDirectory");// give path of directory

