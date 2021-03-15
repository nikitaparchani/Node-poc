const http = require("http");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use((req, res, next) =>{
    //Allows the request to continue to the next middleware;
    next(); 
});
app.use('/add-product',(req, res, next) =>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"/><button type="submit">Send</button></form>');
});
app.post('/product',(req, res, next) =>{
    console.log(req.body);
    res.redirect('/');
});
app.use('/',(req, res, next) =>{
    res.send('<h1>hello from Express</h1>');
});
const server = http.createServer(app);

server.listen(3000);
