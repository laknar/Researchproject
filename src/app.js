var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const fileupload = require('express-fileupload');
var user = require('./api/user/user.controller.js');
var ruser = require('./api/user/ruser.controller.js');
dotenv.config();


app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json({limit: '10mb', extended: true}));

//app.use( fileupload());

var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
app.use('/api/user',user);
app.use('/api/ruser', ruser);

