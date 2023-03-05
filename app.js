const { urlencoded } = require('express')
const express = require('express')
const router = require('./routes')
const app = express()
const port = 3001


app.set('view engine', 'ejs')
app.use(urlencoded({ extended: true }))
app.use(express.static('./public'));

app.use(router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})