const express = require('express');
// const helmet = require('helmet');
// const cors = require('cors');

// const userRouter = require('../routs/users-router');

const server = express();

// server.use(helmet());
// server.use(express());
// server.use(cors());

// server.use('./api/users', userRouter);

server.get('/', (res,req) => {
    res.statusCode(200).json({api: "xxx server running xxx"});
})

module.exports = server;