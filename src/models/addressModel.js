const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId

const addressSchema = new mongoose.Schema(
    {
        customerId: {
            type: ObjectId, required: 'Customer Id Required', ref: 'customer'
        },

        address: {
            type: String,
            trim:true,
            required: 'Address Required',
        },

        landmark: {
            type: String,
            trim:true,
            required: 'Landmark Required',
        },

        city: {
            type: String,
            trim:true,
            required: 'City Required',
        },

        state: {
            type: String,
            trim:true,
            required: 'State Required',
        },

        country: {
            type: String,
            trim:true,
            required: 'Country Required',
        },

        zipCode: {
            type: String,
            trim:true,
            required: 'Zipcode Required',
        },

        isDeleted: {
            type: Boolean,
            default: false
        }

    }, 
    { timestamps: true });

module.exports = mongoose.model("address", addressSchema);