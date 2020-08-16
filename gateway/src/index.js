const createError = require('http-errors');
const express = require('express');
const http = require('http');

const port = 3000;

const ticketRoute = require('./ticket');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', ticketRoute);

app.use(function(req, res, next) {
    next(createError(404));
});

app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
});

app.set('port', port);

const server = http.createServer(app);

server.listen(port);
