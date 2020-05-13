var http = require ('http')
const express = require ('express')

const app = express()

http.createServer(app).listen(8080);

app.get('/hello-world' , function (req , res){
    res.send("Hello World ek pagal insaan is getting bored so i have to write.....")
}

)