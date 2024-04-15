const fs = require('fs');

module.exports = (req, res) => {
    const filename = req.url.slice(8);
    const file = fs.createReadStream(`./static/${filename}`);

    file.on('error', () => {
        res.statusCode = 404;
        res.write('Not found');
        res.end();
    })

    file.pipe(res);
};