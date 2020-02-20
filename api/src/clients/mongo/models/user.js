const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    processed: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: {
        createdAt: 'date_created',
        updatedAt: 'date_updated'
    }
});

module.exports = mongoose.model('user', schema);