const express = require("express");
const router = require("./routes/server.js");
const port = 3008;
const app = express();
app.use('/', router);
app.use(express.static("../src/index.js"))
app.listen(port, (e) => e ? "" : console.log(`Server running. http://localhost:${port}`)); 