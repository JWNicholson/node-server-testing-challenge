require("dotenv").config();
const server = require("./api/server.js");

const PORT = process.env.PORT || 6000;

server.listen(port, () =>{
    console.log(`=== server listening on port: ${PORT}. ===`)
})