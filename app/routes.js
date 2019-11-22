const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


var months = [null, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


router.get('/check-your-answers', function(req, res, next) {
  //console.log(req);
  console.log(months)
  console.log(req.session.data['incident-month']);
  var mon = parseInt(req.session.data['incident-month'])
  var monthName = months[mon];
  console.log(monthName);
  res.render('check-your-answers', {
                monthName: monthName
              });

});



module.exports = router
