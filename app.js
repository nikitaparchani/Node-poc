const http = require("http");
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');
const errorController = require('./controllers/error')

const app = express();

app.engine('handlebars', expressHbs({defaultLayout: false}));
app.set('view engine', 'handlebars');
app.set('views','views');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))
app.use('/admin' , adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);
const server = http.createServer(app);

server.listen(3000);
