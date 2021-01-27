const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//middleware
app.use(express.static(__dirname + '/public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.listen(8080, function(){
    console.log('Listening to port 8080');
});

app.post('/',function(req, res){
    console.log(req.body.email);
    res.end("Success!");
});