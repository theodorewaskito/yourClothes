var express = require('express')
const router = require('./routes/index')
const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.use('/', router)

app.listen(PORT, () => {
  console.log('App is listening in port', PORT);
})