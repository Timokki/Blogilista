const procEnvs = require('dotenv').config()

const MONGODB_URI = procEnvs.parsed.MONGODB_URI
const PORT = procEnvs.parsed.PORT

module.exports = {
  MONGODB_URI,
  PORT
}