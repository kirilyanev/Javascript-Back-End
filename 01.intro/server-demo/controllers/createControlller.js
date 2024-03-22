// const formidable = require('formidable');
const parseForm = require('../util/formParser.js');
const database = require('../util/database.js');


module.exports = async (req, res) => {
    // const form = new formidable.IncomingForm();

    // form.parse(req, (err, fields, files) => {

    //     database.addItem(fields);

    // });


    const body = await parseForm(req);

    console.log('created item');

    database.addItem(body);

    res.writeHead(301, {
        'Location': '/catalog'
    });
    res.end();
};