var express = require('express');
var app = express();
var apiRouter = require('./router/service.js');

app.use('/api', apiRouter);
app.listen(3030);
console.log('api service started on port:3030 http://localhost:3030');