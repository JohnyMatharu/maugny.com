const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/maugny', {
});

module.exports = mongoose.connection;
