const express = require('express')
const app = express()
const routes = require('./routes')

//  /profiles/1234?caampanha=googleads&nome_campanha=seila

app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(routes)

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000')
  console.log('Servidor rodando...')
})
