const express = require('express');
const businessRoutes = express.Router();

//hook in mongo schema
let Business = require('./business.model');

businessRoutes.route('/add').post(function(req, res) {

});

businessRoutes.route('/').get(function(req, res) {

});

businessRoutes.route('/edit/:id').get(function(req, res) {

});

businessRoutes.route('/update/:id').post(function(req,res) {

});

businessRoutes.route('/delete/:id').get(function(req,res) {

});

module.exports = businessRoutes;