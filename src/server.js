const http = require('./app');
const port = 8080;

http.listen(port, () => {
    console.log('server is running on port', port);
});