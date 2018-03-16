const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db

app.use(express.static(path.join(__dirname, 'public')))

MongoClient.connect('mongodb://calendar:cal123@ds261828.mlab.com:61828/calendar-app', (err, client) => {
	if (err) return console.log(err)
	db = client.db('calendar-app')
	app.listen(3000, () => {
		console.log('listening on 3000')
	})
})
app.use(bodyParser.urlencoded({
	extended: true
}))

app.get('/', function (req, res) {
	// var cursor = db.collection('referrals').find()
	// cursor.toArray(function(err, result){
	// if (err) return console.log(err)
	// console.log(results)
	res.sendFile('./index.html') //the './' means stay in this folder
	// })
	// res.sendFile('/Users/KDor/Desktop/moolah' + '/index.html')
})


app.get('/test', function (req, res) {
	res.send('test received')
})