const express = require('express')
const routes = require('./routes')
const path = require('path')

const app = express()

app.use('/public/build', express.static('build/client'))
app.set('views', path.resolve(__dirname, '../..', 'views'))
app.set('view engine', 'pug')

app.use('/', routes)
app.listen(3000, () => {
  console.log('server listening on port 3000!')
})
