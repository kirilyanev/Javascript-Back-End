const layout = require('../views/layout.js');
const database = require('../util/database.js');

const html = (items) => `
<div>

    <h1>Catalog</h1>
    <form method="POST" action="/create">
        <label>Name <input type="text" name="name"></label>
        <label>S/N <input type="text" name="serial"></label>
        <input type="submit" value="Create Item">
    </form>
    <ul>
        ${items.map(i => `<li>${i.name} - ${i.serial}</li>`)}
    </ul>

</div>`;

module.exports = (req, res) => {
    res.write(layout(html(database)));
    res.end();
};