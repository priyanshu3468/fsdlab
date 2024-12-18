const operations = require('./newMod');
const fileName = 'file.txt';


setTimeout(()=>{
  operations.readFile(fileName);

},5000);

setTimeout(()=>{
  operations.writeFile('hello.txt',"NEw Content");
},2000);

operations.appendFile('file.txt'," Appended");




