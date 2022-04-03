const Product = require("./model");
const fs = require("fs");
const path = require("path");


const index = (req, res) => {
    Product.find()
        .then(result => res.send(result))
        .catch(err => res.send(err));
};

const view = (req, res) => {
    const { id } = req.params;
    Product.findOne({ _id: id })
        .then(result => res.send(result))
        .catch(err => res.send(err));
};


const store = (req, res) => {
  const { name, price, stock, status } = req.body;
  const image = req.file;
  if (image) {
    const target = path.join(__dirname, "../../uploads", image.originalname);
    fs.renameSync(image.path, target);
    Product.create({
      name,
      price,
      stock,
      status,
      image_url: `http://localhost:3000/public/${image.originalname}`,
    })
      .then((result) => res.send(result))
      .catch((error) => res.send(error));
  }
};

const update = (req, res) => {
    const { name, price, stock, status } = req.body;
    const image = req.file;
    if (image) {
        const target = path.join(__dirname, "../../uploads", image.originalname);
        fs.renameSync(image.path, target);
        Product.update(
            { _id: req.params.id },
            {
                name,
                price,
                stock,
                status,
                image_url: `http://localhost:3000/public/${image.originalname}`,
            }
        )
            .then((result) => res.send(result))
            .catch((error) => res.send(error));
    } else {
        Product.update(
            { _id: req.params.id },
            {
                name,
                price,
                stock,
                status,
            }
        )
            .then((result) => res.send(result))
            .catch((error) => res.send(error));
    }
};

const _response = (res) => {
    return (error, results) => {
        if (error) {
            res.send({
                status: "error",
                error,
            });
        } else {
            res.send({
                status: "success",
                results,
            });
        }
    };
};

const destroy = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then((result) => res.send(result))
        .catch((error) => res.send(error));
};


module.exports = {
    index,
    store,
    view,
    update,
    destroy
};