let cp = require("child_process");
console.log("trying to open vs code");
cp.execSync("calc"); // code,start chrome etc
console.log("opened vs code");
// we can also run c,java,python,another java script file by child process
let output =  cp.execSync("node abc.js");
console.log(output);// gives output in binary
console.log("output " + output); // gives output in human readable formate

