const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const apiRouter = require('./routes/router')
const app = express()

require('ejs')
app.set('views',path.join(__dirname,'/views') )
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/', apiRouter)

app.listen(8080, function(){
    console.log("Server is running at http://localhost:8080")
})
