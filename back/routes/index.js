var express = require('express');
var router = express.Router();



// Définir le dossier des vues
// router.set('views', path.join(__dirname, 'views'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
