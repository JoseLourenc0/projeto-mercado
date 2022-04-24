const http = require('http')
const app = require('./app')
const port = require('./.env').PORT || 3000
const server = http.createServer(app)
const { version } = require('./package.json')

server.listen(port)

console.log(`
==================================
    LISTENING ON PORT   ${port}
    API Version         ${version}
==================================
`)