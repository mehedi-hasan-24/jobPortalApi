require("dotenv").config();
const http = require("http");
const app = require("./app");
const {connectDB} = require("./db");

const server = http.createServer(app);
const PORT = process.env.PORT || 4000;

const main = async () => {
    await connectDB();
    server.listen(PORT, ()=>{
        console.log("server listening on port " + PORT);
    })
}

main();