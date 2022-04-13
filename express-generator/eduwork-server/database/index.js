const mongose = require('mongoose');
const { dbHost, dbPass, dbName, dbPort, dbUser } = require('../app/config');
mongose.connect(`mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=admin`); 
const db = mongose.connection;

module.exports = db;