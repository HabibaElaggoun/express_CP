const express = require('express')
const Time = require('./Middleware/middleware')
const app = express()

app.use(Time)
const fs = require('fs')
const path = require('path')
app.use( express.static(path.join(__dirname, 'Views')));



//HOME
app.get('/', function (req, res){
    fs.readFile('./Views/Home.html', 'utf8', (error, data) =>{
        if (error) throw error;
        res.send(data)
    })
})

//OUR_SERVICES
app.get('/', function (req, res){
    fs.readFile('./Views/Our-services.html', 'utf8', (error, data)=> {
if (erroe) throw error;
res.send(data)
    })
});


//CONTACT_US
app.get('/', function(req, res){
    fs.readFile('./Views/Contact-us.html', 'utf8', (error, data)=>{
        if (error) throw error;
        res.send(data)
    })
})


const port = 4000

app.listen (port, () => { console.log(`Server is listening on port ${port}`)
})