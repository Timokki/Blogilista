const app = require('./app') // varsinainen Express-sovellus
const http = require('http')
const envs = require('./utils/config')
const logger = require('./utils/logger')

const server = http.createServer(app)

server.listen(envs.PORT, () => {
  logger.info(`Server running on port ${envs.PORT}`)
})