const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            trim:true,
            lowercase:true,
            required: 'First Name Required',
        },

        lastName: {
            type: String,
            trim:true,
            lowercase:true,
            required: 'Last Name Required',
        },

        userName: {
            type: String,
            trim:true,
            required: 'User Name Required',
            unique: true,
        },

        email: {
            type: String,
            trim:true,
            required: 'Email Required',
            unique: true,
        },

        phone: {
            type: String,
            trim:true,
            required: 'Phone Required',
            unique: true,
        },

        dob: {
            type: String,
            trim:true,
            required: 'DOB Required',
        },

        gender: {
            type: String,
            trim:true,
            enum: ["Male", "Female", "Others"],
            required: 'Gender Required'
        },

        password: {
            type: String,
            required: 'Password Required',
        },

        confirmPassword: {
            type: String,
            required: 'Confirm Password Required',
        },

        image: {
            type: String,
            required: 'Image Required',
        },

        isDeleted: {
            type: Boolean,
            default: false,
        }
    }, 
    { timestamps: true });

module.exports = mongoose.model("customer", customerSchema);