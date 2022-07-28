const server = require('./src/server.js')
const dotenv = require('dotenv')
dotenv.config()

server.listen(process.env.PORT, () => {
  console.log('listening at 3001')
})
