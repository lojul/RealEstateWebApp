const express = require("express");
const bodyParser = require('body-parser');
const buildingRoute = require("./routes/building");
const client = require("./database");

const app = express();
const SERVER_PORT = 3001;
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);


app.use(express.json());
app.use("/building", buildingRoute);

app.listen(SERVER_PORT, () => {
    console.log(`Server running on port ${SERVER_PORT}`)
})

