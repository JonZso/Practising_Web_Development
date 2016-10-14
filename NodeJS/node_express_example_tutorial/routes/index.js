var express = require('express');
var router = express.Router();
var vd = require('../videodata.json');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'My Website Using NodeJS',
    name: 'jon',
    info: 'nodeJS website thing',
    lang: 'nodeJS',
    videodata: vd
  });
});


module.exports = router;
