// const mongoose = require('mongoose');

// const DB = process.env.DB_URL;
// console.log('DB--', DB);
// mongoose
//     .connect(DB)
//     .then(() => {
//         console.log('DB connection established');
//     })
//     .catch((err) => {
//         console.log('DB CONNECTION FAILED');
//         console.log('ERR: ', err);
//     });

const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DB_URL,
});

client
  .connect()
  .then(() => {
    console.log("PostgreSQL connection established");
  })
  .catch((err) => {
    console.log("POSTGRESQL CONNECTION FAILED");
    console.log(err);
  });

module.exports = client;