const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var Client = require('node-rest-client').Client;
 
var client = new Client();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

const app = express();

app.post('/getLocations',(req,res)=>{
    const typedWord = req.body.city;

    client.get("https://maps.googleapis.com/maps/api/place/findplacefromtext/json?query="+typedWord+"&key=AIzaSyB_9f-v5GTmBhnsNlubs74tfymgG_2G34w", function (data, response) {
    // parsed response body as js object
    console.log(data);
    // raw response
    console.log(response);
});

})

app.listen(3001,()=>{
    console.log('listening to port 3001')
})