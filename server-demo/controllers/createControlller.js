const formidable = require('formidable');

module.exports = (req, res) => {
    const form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
        console.log('created item');
        console.log(fields)
        res.writeHead(301, {
            'Location': '/catalog'
        });
        res.end();
    });


};