var express = require('express')
var app = express()

app.use(express.static(__dirname))
//declare a variable server and set to app.listen in case the port changes once the app is deployed
var server = app.listen(3000, () => {
	console.log('server is listening on port', server.address().port)
})
