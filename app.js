var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db/database')
const checkAuth = require('./middleware/checkauth');

var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');
var sparesRouter = require('./routes/spares');

process.env.NODE_ENV= "development"

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/',  indexRouter);
app.use('/api/auth', authRouter);
app.use('/api/spares', checkAuth, sparesRouter);


module.exports = app;
