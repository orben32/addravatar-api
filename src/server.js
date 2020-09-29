const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Identicon = require('identicon.js')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.get('/identicon/:hash', (req, res) => {
    const imgData = new Identicon(req.params.hash, {size: 1000, format: 'png'}).toString()
    res.render('index.ejs', {data: imgData})
})

app.listen(process.env.PORT || 3000, () => {
    console.log('listening on 3000')
})