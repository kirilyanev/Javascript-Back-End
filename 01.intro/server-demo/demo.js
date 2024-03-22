const fs = require('fs/promises');

console.log('before');
handleFiles();
console.log('after');

// makes copy of package.json
// fs.writeFileSync('./package_copy.json', data);


async function handleFiles() {
    const data = await fs.readFile('./package.json');
    console.log(data.toString());
}

demo();

async function demo() {
    const files = await fs.readdir('.');
    console.log(files);
}