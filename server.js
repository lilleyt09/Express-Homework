const express = require('express');

const path = require('path');

const app = express();
var PORT = process.env.PORT || 4900;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./db/routes/apiRoutes")(app);
require("./db/routes/htmlRoutes")(app);

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });