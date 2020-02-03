// /client/src/setupProxy.js

const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(proxy('/api/lawsuit', { target: 'https://sigjur-backend.herokuapp.com' }))
}