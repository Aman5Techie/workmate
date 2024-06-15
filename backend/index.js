require("dotenv").config();
const cors = require("cors")
const express = require("express");
const ApolloServer = require("./graphql/server");
const app = express();
// Applying Cors
app.use(cors());

// JSON formatting
app.use(express.json()); // PARSER JSON

// DataBase Connectivity

//  Importing Created Router
const router = require("./routers/router")

app.use("/",router);

app.listen(process.env.PORT,()=>{
    console.log(`Listening ON port ${process.env.PORT}`);
})

ApolloServer.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
