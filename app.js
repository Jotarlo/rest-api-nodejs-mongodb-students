/** importing packages  */
const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');

/** App configuration */
const app = express();

/** Parser */
let bodyParserJSON = bodyParser.json();
let bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

/** REST api methods */

app.get('/', (req, res) => {
    res.send('Welcome to express server in web programming.');
});

let studentRoutes = require("./routes/student.routes");
studentRoutes(app);

let courseRoutes = require("./routes/course.routes");
let router = courseRoutes(express);
app.use("/api/course", router);

/** Server start */
let port = config.get('server-port');
app.listen(port, () => {
    console.log(`Express server is running in port ${port}`);
});