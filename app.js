//npm run dev für nodemon
const express = require("express");
const app = express();
const PORT = 8040;
const router = require("./routes/router");

app.set("view engine", "ejs");
app.set("views","views");

app.use(express.static("public"));

app.use(router);

app.listen(PORT, () => console.log(`Server auf Port ${PORT} gestartet!`));