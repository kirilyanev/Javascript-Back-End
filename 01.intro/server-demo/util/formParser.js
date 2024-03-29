// const fs = require('fs');

async function parse(req) {
    return new Promise((resolve, reject) => {
        let body = '';

        req.on('data', data => body += data);
        req.on('end', () => {
            let result;
            try {
                result = body
                    .split('&')
                    .map(p => p.split('='))
                    .reduce((a, c) => Object.assign(a, { [c[0]]: c[1] }), {})

                resolve(result);
            } catch (err) {
                reject(err);
            }
        });
    });
};


module.exports = parse;


// async function demo() {
//     const src = fs.createReadStream('./data.txt');
//     const result = await parse(src);

//     console.log(result);
// }

// demo();

// name=srtgsefg&serial-213123
/*
[
    ['name','srtgsefg'],
    ['serial','213123']
]
*/