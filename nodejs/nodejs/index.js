const {hello,world} = require('./module');
//console.log('Hello from nodejs');
//console.log(hello(), world());

const http = require('http');
const moment = require('moment');


const server = http.createServer((req, res) => {
    // console.log(req.url);
    switch (req.url) {
        case '/welcome': welcome(res); break;
        case '/': home(res); break;
        default: page404(res); break;
    }
});


const welcome = res => {
res.statuseCode = 200;
    res.setHeader('Content-Type', 'text/json');
    res.write(JSON.stringify({
        status: 'successfully',
        message: 'Welcome to MERN class',
        study: 'Nodejs',
        loginAt: moment()

    }));
    res.end();
};

const page404 = (res) => {
  res.statuseCode = 404;
  res.setHeader("Content-Type", "text/json");
  res.write(
    JSON.stringify({
      status: "failed",
      message: "Resource not found"
    })
  );
  res.end();
};

const home = (res) => {
  res.end('<h1>Home Page</h1>');
};
server.listen(3000, () =>console.log('Server running at http://127.0.0.1:3000'));