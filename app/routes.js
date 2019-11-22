const express = require('express')
const router = express.Router()
var months = [null, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


// Add your routes here - above the module.exports line


router.get('/check-your-answers', function(req, res, next) {
  var mon = parseInt(req.session.data['incident-month'])
  var monthName = months[mon];

  res.render('check-your-answers', {
                monthName: monthName
              });

});



router.get('/confirmation', function(req, res, next) {
  // dummy confirmation
  var random1 = Math.floor(Math.random()*10);
  var random2 = Math.floor(Math.random()*10);
  var random3 = Math.floor(Math.random()*10);
  var random4 = Math.floor(Math.random()*10);
  var randomNo = "FSA" + random1 + random2 + random3 + random4 +"A";

  res.render('confirmation', {
                applicationReference: randomNo
              });

});



module.exports = router
