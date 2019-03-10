var express = require('express');
var path = require("path");

// Exports
module.exports = function(app) {
    app.get('/', function(req, response) {
        response.sendFile(path.join(__dirname, '../public/home.html'));
    });

    app.get('/survey', function(req, response) {
        response.sendFile(path.join(__dirname, '../public/survey.html'));
    });
}
