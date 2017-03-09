var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Joey's World" });
});

router.get('/disndat', function(req, res, next) {
  res.render('translator', { title: "Brooklyn Rage" });
});


module.exports = router;
