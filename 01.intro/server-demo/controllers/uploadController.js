const fs = require('fs/promises');
const formidable = require('formidable');

module.exports = (req, res) => {
    const form = new formidable.IncomingForm();

    form.parse(req, async (err, fields, files) => {
        console.log(files);
        const filepath = files['uploaded-file'].filepath;
        const name = files['uploaded-file'].originalFilename;
        const targetPath = './uploads/' + name;

        // works in lection demo, but not working locally on Linux
        // await fs.rename(filepath, targetPath);

        // works locally on Linux
        // Copy the file to the destination
        await fs.copyFile(filepath, targetPath);
        // Delete the original file
        await fs.unlink(filepath);

        res.writeHead(301, {
            'Location': '/catalog'
        });
        res.end();
    });
};