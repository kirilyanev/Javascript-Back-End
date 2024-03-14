const http = require('http');

const router = require('./router.js');

const aboutController = require('./controllers/aboutController.js');
const homeController = require('./controllers/homeController.js');
const catalogController = require('./controllers/catalogController.js');

router.get('/', homeController);
router.get('/catalog', catalogController);
router.get('/about', aboutController);

const port = 3000;
const server = http.createServer(requestHandler);

function requestHandler(req, res) {
    console.log('>>>', req.method, req.url);
    const handler = router.match(req.url);
    handler(req, res);
}

server.listen(3000, () => console.log('Server listening on port ' + port));