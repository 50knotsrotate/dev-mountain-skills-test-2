require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const massive = require('massive')
const controller = require('./controller')

app.use(bodyParser.json())

massive(process.env.CONNECTION_URI)
    .then(db => { 
        app.set('db', db)
      // db.init()
        console.log('connected to db')
    }).catch(err => { 
        console.log(err)
    })

app.get('/api/inventory', controller.getInventory)
app.post('/api/inventory', controller.addProduct)
app.delete('/api/inventory/:id',controller.deleteProduct)

const PORT = 4000;
app.listen(PORT, () => { 
    console.log(`Server has started on port ${PORT}`)
})
