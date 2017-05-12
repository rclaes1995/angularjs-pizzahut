var gzippo = require('gzippo');
var express = require('express');
var app = express();

app.use(express());
app.use(gzippo.staticGzip('' + __dirname + '/dist'));
app.listen(process.env.PORT || 5000);

console.log('Process started on port 5000');
