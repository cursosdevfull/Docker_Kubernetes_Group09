const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api/message", (req, res) => res.send("Hola desde el backend2"));
app.get("/healthcheck", (req, res) => res.send("ok"));
app.get("/", (req, res) => res.send("ok"));

const PORT = process.env.PORT || 19002;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
