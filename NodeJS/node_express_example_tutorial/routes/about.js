var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('about', {
        title: 'My Website Using NodeJS',
        name: 'jon',
        info: 'nodeJS website thing',
        lang: 'nodeJS'
    });
});

module.exports = router;
