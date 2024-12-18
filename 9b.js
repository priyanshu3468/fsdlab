const util = require("util");
const debug = util.debuglog("app");
console.time("Execution time:");
console.log("hello world!");
console.timeEnd("Execution time:");
console.group();
console.log("I am priyanshu");
console.log("i am 20 years oid");
console.groupEnd();
console.assert(1==3,"wrong expression");
const data=[{name: "priyanshu",age:10},
    {name:"pratik",age:29},
    {name:"sunidhi", age:20}
];
console.table(data);
debug("Process Details %o",process);
debug("environment variables %o",process.env);
