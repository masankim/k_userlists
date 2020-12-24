const express = require('express');
const router = express.Router();

router.get('/data' ,function(request, response){
    console.log(request)
    response.render('test', {name:"김태경"})
})


module.exports = router;