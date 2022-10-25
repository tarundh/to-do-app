const express = require("express")
const bodyParser = require("body-parser")

const app = express();

app.get("/", function(req, res){

    var today = new Date();
    var currentDate = today.getDay()
    if (currentDate === 6 || currentDate === 0){
        res.write("Hurray! Its a weekend")
    } else {
       res.sendFile(__dirname + "/index.html")
    }
    

});

app.listen(3000, function(){
console.log("Hey server is up and running")
});