const app = require('./app') // varsinainen Express-sovellus
const http = require('http')
const envs = require('./utils/config')

const server = http.createServer(app)

server.listen(envs.PORT, () => {
  console.log(`Server running on port ${envs.PORT}`)
})