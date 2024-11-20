const fs =require('fs');

//create read stream // utf8 encoding use kore binary data string kora jay
const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);
const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);

ourReadStream.on('data',(chunk)=>{
//     console.log(chunk)
    console.log(chunk.toString())
})

// ourReadStream.on('data',(chunk)=>{
//     ourWriteStream.write(chunk)
// })

ourReadStream.pipe(ourWriteStream)

console.log('hello')

