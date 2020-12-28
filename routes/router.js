const express = require('express');
const router = express.Router();
const mysql  = require('mysql2')

const db = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'1234',
    database:'o2'
})

router.get('/data' ,function(request, response){
    console.log(request)
    response.render('test', {name:"김태경"})
})


router.get('/topic', function(req, res){
    let sql = 'SELECT * FROM topic'
    db.query(sql, function(err,result){
        if(err){
            console.log(err)
            res.status(500).send(err)
        }else {
            console.log(result)
            res.render('index', {topics:result})
        }
    })
    
})
module.exports = router;