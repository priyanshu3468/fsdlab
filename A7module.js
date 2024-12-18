

const fs= require('fs');

function readFile(file){

  fs.readFile(file,'utf8',(err,data)=>{
    if(err)
    {
      console.log("error Reading the file");
    }
    else
    {
      console.log(data);
    }
  })

}

const writeFile = (file,content)=>{
  fs.writeFile(file,content,(err)=>{
    if(err)
    {
      console.log("Error writing the file");
    }
    else
    {
      console.log("File written");
    }
  })
}

const appendFile = (file,content)=>{
  fs.appendFile(file,content,(err)=>{
    if(err)
    {
      console.log("Error detected");

    }
    else
    {
      console.log("File appended");
    }
  })
}

module.exports = {readFile,writeFile,appendFile};