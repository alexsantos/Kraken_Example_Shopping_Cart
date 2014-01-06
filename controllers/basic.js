'use strict';


var BasicModel = require('../models/basic');


module.exports = function (app) {

    var model = new BasicModel();


    app.get('/basic', function (req, res) {
        
        res.render('basic', model);
        
    });

};
