'use strict';


//var SetlanguageModel = require('../models/setLanguage');


module.exports = function (server) {

    //var model = new SetlanguageModel();


    server.get('/setlanguage/:lang', function (req, res) {
        
        res.cookie('language', req.param('lang'));
        res.redirect('/');
        
    });

};
