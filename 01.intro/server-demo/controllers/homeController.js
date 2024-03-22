const { loadTemplate, layout } = require('../util/template.js');


module.exports = async (req, res) => {
    const homepage = await loadTemplate('home');
    res.write(await layout(homepage));
    res.end();
};