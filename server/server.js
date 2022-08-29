const express = require('express'); // express is a function not a class - therefore no import 
const app = express(); // app has all the methods attached to it such as GET/POST/PUT/DELETE
const cors = require('cors');
app.use(cors()); // passing the function of cors so the app uses the cors library 


//when creating a server that responds to a request we need method, route, port

app.listen(9000, ()=> {

    console.log('App Running on port 9000');
})

app.get('/', (req, res) => { // req = request and res = response

    res.json({message:'Hey World!'})



})

