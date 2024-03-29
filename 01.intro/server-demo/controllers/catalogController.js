const database = require('../util/database.js');
const { layout } = require('../util/template.js');

const html = (items) => `
<div>

    <h1>Catalog</h1>
    <form method="POST" action="/create">
        <label>Name <input type="text" name="name"></label>
        <label>S/N <input type="text" name="serial"></label>
        <input type="submit" value="Create Item">
    </form>
    <ul>
        ${items.map(([id, i]) => `<li data-id="${id}">${i.name} - ${i.serial} <a href="/delete?id=${id}">[Delete]</a></li>`).join('')}
    </ul>

</div>`;

module.exports = async (req, res) => {
    res.write(await layout(html(Object.entries(database.database))));
    res.end();
};