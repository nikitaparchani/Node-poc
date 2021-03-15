const fs = require('fs');
const requestHandler = (req, res) =>{
 const url = req.url;
 const method = req.method;
 if(url === '/'){
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write(
        '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">SEND</button></form></body>'
    )
    res.write('</html>');
    res.end();
}
if(url ==='/message' && method ==='POST'){
    const body=[];
    //allows to listen some events
    req.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk);
    });
    req.on('end',() =>{
        const parsedBody = Buffer.concat(body).toString();
        const message= parsedBody.split('=')[1];
        // write file is used not to block the code
        fs.writeFile('message.txt',message, err => { //sync block code until file is done 
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();
        });
    });
}
}