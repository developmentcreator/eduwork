const connection = require('../../config/sequelize');
const Product = require("./model");
const path = require('path');
const fs = require('fs');

const index = async (req, res) => {
    const { search } = req.query;
    let exec = {};
    if (search) {
        exec = {
            where: {
                name: {
                    [Op.like]: `%${search}%`
                }
            }
        };
    }
    const products = await Product.findAll(exec);
    res.send(products);
};

const view = async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    res.send(product);
};

const destroy = async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    await product.destroy();
    res.send(product);
};


const store = async (req, res) => {
    const { users_id, name, price, stock, status } = req.body;
    const image = req.file;
    if (image) {
        const target = path.join(__dirname, "../../uploads", image.originalname);
        fs.renameSync(image.path, target);
        const product = await Product.create({
            users_id,
            name,
            price,
            stock,
            status,
            image_url: `http://localhost:3000/public/${image.originalname}`
        });
        res.json(product);
    }
};

const update = async (req, res) => {
    const { users_id, name, price, stock, status } = req.body;
    const image = req.file;
    let sql = '';
    if (image) {
        const target = path.join(__dirname, "../../uploads", image.originalname);
        fs.renameSync(image.path, target);
        const product = await Product.update({
            users_id,
            name,
            price,
            stock,
            status,
            image_url: `http://localhost:3000/public/${image.originalname}`
        }, {
            where: {
                id: req.params.id
            }
        });
        res.json(product);
    }
};








const _response = (res) => {
    return (error, results) => {
        if (error) {
            res.send({
                status: 'error',
                response: error
            });
        } else {
            res.send({
                status: 'success',
                response: results
            });
        }
    };
};



module.exports = {
    store,
    index,
    view,
    update,
    destroy
};
