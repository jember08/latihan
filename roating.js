var express = require('express');
var app = express();

app.get('/', function(req, res) {
    console.log('mendapat GET dari homepage')
    res.send('halo dari server kode');

})

app.post('/', function(req, res) {
    console.log('mendapat POST dari homepage')
    res.send('Halo POST');
})


app.get('/list_user', function(req, res) {
    console.log('mendapat GET dari list user')
    res.send('Halo GET dari list user');
})


app.get('/ko*de', function(req, res) {
    console.log('mendapat GET dari /ko*de')
    res.send('Halo GET match');
})

var server = app.listen(1995, function() {
    var host = server.address().address
    var port = server.address().port

    console.log('Basic Routing Listening pada port:', host, port)
})