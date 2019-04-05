require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')
const controller = require('./controller')

massive(process.env.CONNECTION_URI)
    .then(db => { 
        app.set('db', db)
      // db.init()
        console.log('connected to db')
    }).catch(err => { 
        console.log(err)
    })

    app.get('/api/inventory', controller.getInventory)

const PORT = 4000;
app.listen(PORT, () => { 
    console.log(`Server has started on port ${PORT}`)
})
