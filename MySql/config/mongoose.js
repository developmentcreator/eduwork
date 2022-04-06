const mongoose = require('mongoose');
// const user = 'eduwork';
// const password = '1997';
// const database = 'eduwork-mongoose';
// mongoose.connect(
//   `mongodb://${user}:${password}@localhost:27017/${database}?authSource=admin`
//);
mongoose.connect('mongodb://eduwork:1997@localhost:27017/eduwork-mongoose?authSource=admin');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Server database terhubung'));
