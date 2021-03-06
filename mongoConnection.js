const mongoose = require('mongoose');
const mongoConnection = {
    connect: function () {
        const MONGO_URL = 'mongodb://localhost:27017/trello-app';
        mongoose.Promise = global.Promise;
        mongoose.connect(MONGO_URL);

        let db = mongoose.connection;
        db.on('connected', function() {
            console.log('Mongoose is now connected to ', MONGO_URL);
        });

        db.on('error', function(err) {
            console.error('Error in Mongoose connection: ', err);
        });

        db.on('disconnected', function() {
            console.log('Mongoose is now disconnected..!');
        });

        process.on('SIGINT', function() {
            db.close(function() {
                console.log('Mongoose disconnected on process termination');
                process.exit(0);
            });
        });
    }
}

module.exports = mongoConnection;
