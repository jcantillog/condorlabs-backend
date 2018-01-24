var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(request, response, next) {
    response.render('index', { title: 'CondorLabs Backend Test: By Jonathan Cantillo' });
});

module.exports = router;
