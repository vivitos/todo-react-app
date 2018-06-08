var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');

var todosRouter = require('./routes/todos');

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', todosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  const message = err.message;
  res.status(err.status || 500);
  res.json({ message, err });
});

module.exports = app;
