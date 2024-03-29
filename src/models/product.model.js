const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
    },
    createdAt: {
        type: Date,
    },
    image: {
        type: [String],
    },
    hasOffer: {
        type: Boolean,
    },
    // offerDetails: {
    //     offerPercentage: {
    //         type: String,
    //         required: true,
    //     },
    //     produc   tOfferPrice: {
    //         type: Number,
    //         required: true,
    //     },
    //     offerDuration: {
    //         type: Date,
    //         require: true
    //     }
    // }
})

const Product = mongoose.model('product',productSchema)

module.exports = Product