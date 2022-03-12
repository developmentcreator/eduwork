const log = (req, res, next) => {
    console.log(new Date().toLocaleString(), '=>', req.method, req.originalUrl);
    next();
}

module.exports = log;