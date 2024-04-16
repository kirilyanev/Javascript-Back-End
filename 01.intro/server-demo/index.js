const http = require('http');

const router = require('./router.js');

const aboutController = require('./controllers/aboutController.js');
const homeController = require('./controllers/homeController.js');
const catalogController = require('./controllers/catalogController.js');
const createControlller = require('./controllers/createControlller.js');
const deleteController = require('./controllers/deleteController.js');
const uploadController = require('./controllers/uploadController.js');

router.get('/', homeController);
router.get('/catalog', catalogController);
router.get('/about', aboutController);

router.post('/create', createControlller);

router.get('/delete', deleteController);

router.post('/upload', uploadController);

// router.get('/static/penguin.jpg', _static);

const port = 3000;
const server = http.createServer(requestHandler);

function requestHandler(req, res) {
    const url = new URL(req.url, 'http://localhost');
    console.log('>>>', req.method, req.url);
    const handler = router.match(req.method, url.pathname);
    handler(req, res);
}

server.listen(3000, () => console.log('Server listening on port ' + port));