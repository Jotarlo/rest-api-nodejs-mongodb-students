/** importing packages */
const config = require('config');
const mongoose = require('mongoose');
const chalk = require('chalk');

/** connection variables */
const dbInfo = config.get('db-connection');
let connectionString = `mongodb://${dbInfo.host}:${dbInfo.port}/${dbInfo.database}`;

/** Colors */
let connectedChalk = chalk.bold.green;
let disconnectedChalk = chalk.bold.blue;
let errorChalk = chalk.bold.red;
let finishedChalk = chalk.bold.yellow;

module.exports = () => {
    mongoose.connect(connectionString);

    mongoose.connection.on('connected', () => {
        console.log(connectedChalk('Connection has been opened.'))
    });

    mongoose.connection.on('disconnected', () => {
        console.log(disconnectedChalk('Connection has been closed.'))
    });

    mongoose.connection.on('error', () => {
        console.log(errorChalk('Error connecting.'))
    });

    mongoose.connection.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log(finishedChalk("The host is down"));
            process.exit(0);
        });
    });
};