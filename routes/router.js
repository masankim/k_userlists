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


router.get(['/topic','/topic/:id'], function(req, res){
    let sql = 'SELECT * FROM topic'
    db.query(sql, function(err,results){
        console.log(req.params.id)
        let ids = req.params.id
        let sql = "SELECT * FROM topic WHERE id = ?"
        if(ids){
            db.query(sql,[ids], function(err, result){
                console.log(result[0])
                res.render('index', {topic:result[0], topics:results})
            })
        } else {
            console.log(results)
            res.render('index', {topic:undefined, topics:results})
        }
        
           
        
    })
    
})

router.get('/topics/add',function(req, res){
    res.send("ADD PAGE")
})
module.exports = router;