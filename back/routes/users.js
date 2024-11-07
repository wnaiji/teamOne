var express = require('express');
var router = express.Router();


router.post('/"', function(req, res) {
  let âge = req.body.âge;
  console.log('Âge:', âge);

  if (âge >= 0 && âge <= 6) {
    console.log('Enfant');
  } else if (âge >= 7 && âge <= 17) {
    console.log('Adolescent');
  } else if (âge >= 18 && âge <= 120) {
    console.log('Adulte');
  } else {
    console.log('Erreur');
  }
  res.send('Données traitées');
});

module.exports = router;
