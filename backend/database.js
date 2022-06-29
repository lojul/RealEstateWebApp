const { Client } = require('pg');
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'realEstate',
    password: 'password',
    port: 5432,
})

// client.connect(function (err) {
//     if (!err) { console.log("Connected"); } else {
//         console.log(err);
//         console.log('Connection  Failed');
//     }
// });

module.export = { client }


