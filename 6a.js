const fs=require('fs');
process.stdout.write("Enter some text to save to the file: ");
process.stdin.on('data',(data)=>{
    const input=data.toString().trim();
    fs.appendFile('output.txt',input+'\n',(err)=>{
        if(err){
            console.log("Error found",err);
        }
        else{
            console.log('Data saved to "output.txt"');
        }
    })
})