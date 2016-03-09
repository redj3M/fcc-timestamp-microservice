'use strict'

var timestamp = require(process.cwd() + '/app/common/timestamp.js');

module.exports = function(app) {
    app.route('/')
        .get(function(req, res) {
            res.sendFile(process.cwd() + '/public/index.html');
        });
    
    app.route('/*')
        .get(function(req, res) {
            res.send(JSON.stringify(timestamp(req.url.slice(1).split("%20").join(" "))));
        });
};