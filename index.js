const express = require('express')
const bodyParser = require('body-parser')
const _ = require('lodash')

const app = express()
app.use(bodyParser.json())

app.get('/api/env/somekeyerto', async (req, res) => {
    const text= JSON.stringify(process.env.somekeyerto)
    res.send(text);
})

app.get('/api/env/allkeys', async (req, res) => {
    const text = JSON.stringify(process.env)
    res.send(text)
})

app.get('/api/hello', async (req, res) => {

    res.send('Hello World Test Erto v')
})

app.get('/api/merhaba', (req, res) => {

    res.send('Merhaba Dünya v2')
})

app.post('/api/name', (req, res) => {

    const body = _.pick(req.body, ['firstName','lastName'])
    console.log(body)
    res.send('Hello '+body.firstName+' '+body.lastName)
})

app.listen(8080, () => {
    console.log('app server is running v1')
})