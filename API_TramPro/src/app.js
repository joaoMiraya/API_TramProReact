const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cors = require('cors');

const hirerRouter = require('./routes/HirerRouter');
const serviceRouter = require('./routes/ServiceRouter');
const userRouter = require('./routes/UserRouter');
const GoogleUserRouter = require('./routes/GoogleUserRouter');

const app = express();
app.use(express.json());
app.use(cors())


app.use('/users', userRouter);
app.use('/googleUsers', GoogleUserRouter);
app.use('/services', serviceRouter);
app.use('/hirers', hirerRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen('3005', () => console.log("Servidor rodando na porta 3005"))


module.exports = app;
