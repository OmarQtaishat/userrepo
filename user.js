var express= require('express')
var app=express()

var fs= require('fs')

app.get('/', function(req,res)
{
    res.send("start my server")
})

app.get('/listUsers', function(req,res)
{
    var data= fs.readFileSync(__dirname+"/user.json") 
    res.send(String(data))
})

app.get('/user/:id', function(req,res)
{
    var arr =["1", "2 ", "3"]
    if (arr.includes(String(req.params.id)))
    {
    var data= fs.readFileSync(__dirname+"/user.json") 
    data= JSON.parse(String(data))
    console.log(data)
    var user = data['user'+req.params.id]
    console.log(user)

    res.send(user)
    }
    else
    {
      res.send("user id error")
    }
   
})

app.delete('/deleteUser/:id', function(req,res)  
{
    var data= fs.readFileSync(__dirname+"/user.json")
    data=JSON.parse(String(data))
    // var user = data['user'+req.params.id]
    delete data['user'+req.params.id]
    res.send(data)
})

app.post('addUser', function(req,res) 
{
    res.send("userAdded")
})

var server= app.listen(9000, function()
{
    var host = server.address().address
    var port= server.address().port
})