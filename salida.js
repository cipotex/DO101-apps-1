var express = require('express');

app = express();

app.get = ('/', function(req, res) {
    res.send('Hello world!');
});

app.get = ('/', function(req, res) {
    res.send('Hello Mars!');
});

app.listen(8080, function() {
        console.log('Example listening by port 8080');
    }

);