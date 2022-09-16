import mongoose from 'mongoose'
const Schema = mongoose.Schema

const objRef = Schema.Types.ObjectId

const propertySchema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true,
        maxLength: 2
    },
    address1: {
        type: String,
        required: true
    },
    address2: {
        type: String,
        required: false
    },
    propType: {
        type: String,
        enum: ['condo', 'town-home', 'single-family-residence', 'duplex', 'triplex', 'quadplex', 'other'],
    },
    managers: [{
        type: objRef,
        ref: 'Profile',
        required: true
    }],
    tenants: [{
        type: objRef,
        ref: 'Profile',
        required: false
    }],
    owners: [{
        type: objRef,
        ref: 'Profile',
        required: true
    }],
    vendors: [{
        type: objRef,
        ref: 'Profile',
        required: false
    }]
}, {
    timestamps: true,
})

const Property = mongoose.model('Property', propertySchema)

export { Property }