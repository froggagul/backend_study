import express from 'express';
import indexRouter from './routes/index';
import mongoConnect from './mongo_connect';

var app = express();

mongoConnect();

app.use('/', indexRouter);  //indexRouter로 이동

// error handler
app.use(function(err: any, req: any, res: any, next: any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
