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
    let sql = 'SELECT * FROM topic'
    db.query(sql, function(err,results){
       
        if(err){
           console.log(err)
        } else {
            console.log(results)
            res.render('add', { topics:results})
        }           
    })
})

router.post('/topics/add', function(req, res){
    console.log(req.body)
    let title = req.body.title
    let description = req.body.descriptions
    let author = req.body.author
    let sql = "INSERT INTO `topic` (`title`, `description`, `author`) VALUES (?, ?, ?);"
    db.query(sql,[title,description,author],function(err, result){
        if(err) {
            console.log(err)
            res.status(500).send(err)
        }else {
            console.log(result)
            res.redirect("/topic")
        }
    })
    
})
module.exports = router;