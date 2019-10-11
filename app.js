const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


const app = express();

const env = process.env.NODE_ENV || "dev";

const db_connection = "localhost";
const dbURL = "mongodb://" + db_connection + "/";
const dbName = "tmentors";


// Database Connection.
mongoose.connect(`${dbURL}${dbName}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log("DB Connection Error: " + err)
    } else {
        console.log("connected to database successfully");
    }
});

// Middleware
app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



//handling Cross Origins
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    if (req.method === 'OPTIONS') {
        res.header('Allow-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
        return res.status(200).json({});
    }
    next();
});

// API Routes
app.use("/api/products", require("./routes/products"));





// start the server
app.set("port", 8000);
const port = app.get("port") || 8000;

app.listen(port, () => {
    console.log(`application is running on  ${env}`);
    console.log(`database connection is working on : ${db_connection}`);
    console.log(`app is listening to port ${port}`)
});




