const procEnvs = require('dotenv').config()


const MONGODB_URI = procEnvs.parsed.NODE_ENV === 'test'   
? procEnvs.parsed.TEST_MONGODB_URI  
: procEnvs.parsed.MONGODB_URI

//const MONGODB_URI = procEnvs.parsed.MONGODB_URI
const PORT = procEnvs.parsed.PORT

module.exports = {
  MONGODB_URI,
  PORT
}