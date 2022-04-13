const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const cartItemSchema = Schema({
    nama: {
        type: String,
        required: [true, 'Nama produk harus diisi'],
        minlength: [50, 'Panjang nama makanan minimal 50 karakter']
    },

    qty: {
        type: Number,
        required: [true, 'Qty harus diisi'],
        min: [1, 'Qty minimal 1']
    },

    price: {
        type: Number,
        default: 0
    },

    image_url: String,

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }
});

module.exports = model('CartItem', cartItemSchema);