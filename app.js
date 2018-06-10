import createError from 'http-errors';
import path from 'path';
import express from 'express'
import logger from 'morgan';

import todosRouter from './routes/todos';

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', todosRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  const message = err.message;
  res.status(err.status || 500);
  res.json({ message, err });
});

export default app;
