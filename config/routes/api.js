var express = require('express'),
    router = new express.Router(),
    {showAPI} = require('../../controllers/api')



router.route('/proposals')
  .get(showAPI)


module.exports = router 
