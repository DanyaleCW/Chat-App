var express = require('express')
var app = express()

app.use(express.static(__dirname))

var messages = [
	{name: 'Danyale', message: 'is working hard'},
	{name: 'Walker', message: 'and is going to get job because if it.'}
]

app.get('/messages', (req, res) => {
	res.send(messages) //grabs messages form line 7 and 8
})
//declare a variable server and set to app.listen in case the port changes once the app is deployed
var server = app.listen(3000, () => {
	console.log('server is listening on port', server.address().port)
})
