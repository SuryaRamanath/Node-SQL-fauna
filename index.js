const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require("body-parser");

app.use(bodyparser.json())

//connection to db

var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user: 'FaunaNation',
    password:'%FaunaNationIntern2021%',
    database: 'ASSIGNMENT',
    insecureAuth : true,
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if(!err){
        console.log("DB connected!")
    }
    else{
        console.log("error!!!!!!! "+err)
    }
})

//view json

app.get('/fauna', (req, res) =>{
    mysqlConnection.query('SELECT * from fauna',(err,rows,fields) =>{
        if(!err){
            res.send(rows)
        }
        else{
            res.send(err)
        }
    })
})

//view single data by ID

app.get('/fauna/:id', (req, res) =>{
    mysqlConnection.query('SELECT * from fauna  WHERE Id = ?',[req.params.id],(err,rows,fields) =>{
        if(!err){
            res.send(rows)
        }
        else{
            res.send(err)
        }
    })
})


//Delete by ID

app.delete('/delete/:id', (req, res) =>{
    mysqlConnection.query('DELETE From fauna  WHERE Id = ?',[req.params.id],(err,rows,fields) =>{
        if(!err){
            res.send("Deleted Successfully..")
        }
        else{
            res.send(err)
        }
    })
})

//Insert data 

app.post('/insert', (req, res) =>{

    let amph = req.body

    let sql = 'INSERT INTO fauna SET ?' 
   
        mysqlConnection.query(sql,amph, function (err, result, fields){
        if(!err){
        
            res.send("Inserted Successfully..")
        }
        else{
            
            res.send(err)
        }
    })
})

//Update table using id

app.post('/update/:id', (req, res) =>{
    let id = req.params.id

    let amph = req.body

    let sql = 'UPDATE fauna SET ? WHERE id= ?' 
   
        mysqlConnection.query(sql,[amph, id], function (err, result, fields){
        if(!err){
        
            res.send("Updated Successfully..")
        }
        else{
            
            res.send(err)
        }
    })
})


app.listen(2000,()=>console.log("server is on port 2000"));