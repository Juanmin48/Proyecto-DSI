var express = require('express')
var bodyParser = require('body-parser')
var app = express()

require('./database/db.js');

var port = process.env.PORT || 5000

//const apiRouter=require('./routes/api.js');

app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: false
  })
)


app.use('/api/users',require('./routes/api/users.js'));

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})