const express = require('express');
const app = express();

import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './schema';
import resolvers from './resolvers';
const cors = require('cors');

/* Import required libraries */
const mongoose = require("mongoose"),
      bodyParser = require("body-parser");

/* Create DB Connection */
const mongoConnection = require('./mongoConnection');
mongoConnection.connect();


const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

app.use('/api', cors(), bodyParser.json(), graphqlExpress({ schema }))
   .use('/graphiql', graphiqlExpress({ endpointURL: '/api'}))
    .listen(8000, function (err) {
      console.log('Server is now running on localhost:8000');
    });

module.exports = app;
