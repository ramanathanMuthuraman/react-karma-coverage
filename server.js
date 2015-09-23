/** @jsx React.DOM */
var React = require('react');
var Router = require('react-router');
var express = require('express');
var exphbs  = require('express-handlebars');
var favicon = require('serve-favicon');
var config = require('./config')

var app = express();
app.use(express.static(__dirname + '/build'));
app.use(express.static(__dirname + '/coverage'));

app.listen(config.PORT);

 module.exports = app;