const express = require('express');

const path = require('path');

const app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./db/routes/apiRoutes")(app);
require("./db/routes/htmlRoutes")(app);

app.listen(PORT, () => console.log("Server is running on " + PORT));