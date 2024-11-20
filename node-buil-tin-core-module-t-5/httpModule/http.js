const http = require('http');

//server obj hocce ekta event emiter
const server = http.createServer((req, res)=>{
    if(req.url === '/'){

        res.write('Hello program');
        res.write(' How are doing');
        res.end();
    } else if(req.url === '/about'){
        res.write('This is about page');
        res.end();
    }else{
        res.write('not found')
    }

});

server.listen(3000)

console.log('listening on port 3000')
