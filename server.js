const { Console } = require("console");
const { response } = require("express");
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded(
        {extended : true}
        )
    )

app.use(
    express.json()
    )

app.listen(
    PORT, function(){ console.log("server port: " + PORT)}
    )

var tables =[
    {
        customerName: "Eduardo",
        customerEmail:"a01566271@itesm.mx",
        customerId: "271",
        phoneNumber: "6141691390"
    },
    {
        customerName: "Raul",
        customerEmail:"a01566324@itesm.mx",
        customerId: "324",
        phoneNumber: "6141879564"
    },
]

var waiting = [
    {
        customerName: "javier",
        customerEmail:"a01566123@itesm.mx",
        customerId: "123",
        phoneNumber: "6141879123"

    }
]

app.get("/", function(request, response){
    response.sendFile(path.join(__dirname, "home.html"))
})

app.get("/home", function(request, response){
    response.sendFile(path.join(__dirname, "home.html"))
})

app.get("/reserve", function(request, response){
    response.sendFile(path.join(__dirname, "reserve.html"))
})

app.get("/tables", function(request, response){
    response.sendFile(path.join(__dirname, "tables.html"))
})

app.get("/api/tables", function(request, response){
    response.json(tables)
})

app.get("/api/waitlist", function(request, response){
    response.json(waiting)
})


app.post("/api/tables", function(request, response){
    var auxTemp =  request.body

    if(tables.length < 4){
        tables.push(auxTemp)
    }else{
        waiting.push(auxTemp)
    }
}) 

