const path = require('path');
const os =require('os');
const fs =require('fs');
const EventEmitter = require('events');
const myPath = "G:/All Projects/node.js/node-buil-tin-core-module-t-5/index.js"

// -------------- path module------------
// console.log(path.basename(myPath))
// console.log(path.dirname(myPath))
// console.log(path.extname(myPath))
// console.log(path.parse(myPath))


// -------------os module---------------

// console.log(os.platform())
// console.log(os.homedir())
// console.log(os.freemem())
// console.log(os.cpus())

// -------------fs module----------
// ----syncronus wayes not reqomendet------------
// fs.writeFileSync('myFile.txt', 'Hello programers');
// fs.appendFileSync('myFile.txt', ' How are you');
// const data = fs.readFileSync('myFile.txt');

// console.log(data.toString())

// -----------asyncronus wayes reqomendet--------
// fs.readFile('myFile.txt', (err, data)=>{
//     console.log(data.toString())
// })
// console.log('hello')

// --------------events module-0--------------

const emitter = new EventEmitter();

// register a listener for bellRing event
emitter.on('bellRing', ({period, text})=>{
    console.log(`We need to run! because ${period} ${text}`)
})
// raise an event
setTimeout(()=>{

    // emitter.emit('bellRing', 'first period ended', 'insa Allah')
    emitter.emit('bellRing', {
        period:'first',
        text: 'period ended'
    })
}, 2000)