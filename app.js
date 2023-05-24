const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { errorHandler } = require('./utils/errorHandler');
const cors = require('cors');
require('express-async-errors');

const indexRouter = require('./routes/index');

const app = express();

app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'http://127.0.0.1:5173',
      'https://stdybdyv1.netlify.app',
      'https://altcampv1.netlify.app',
    ],
  })
);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.redirect('https://altcampv1.netlify.app');
});

app.use('/', indexRouter);

app.use(errorHandler);

module.exports = app;
