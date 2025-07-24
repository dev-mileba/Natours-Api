const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoute');
const userRouter = require('./routes/userRoute');

const app = express();
// MiddleWares
app.use(morgan('dev'));
app.use(express.json());

/**
 * Middleware that logs a message for every incoming request.
 *
 * @function
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
app.use((req, res, next) => {
  console.log('Hello from the middleware 👋🏻');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3. Routes

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
// 4. Server

module.exports = app;
