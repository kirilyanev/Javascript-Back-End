const { layout } = require("../util/template.js");


const html = `
    <div>
        <h1>About Us!</h1>
        <p>About page</p>
    </div>`;

module.exports = async (req, res) => {
    res.write(await layout(html, 'About'));
    res.end();
};