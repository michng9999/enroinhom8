require("dotenv").config();
require("express-async-errors");
const express = require("express");
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const baihatRoutes = require("./routes/baihats");
const playListRoutes = require("./routes/playlists");
// const searchRoutes = require("./routes/search");
const app = express();

connection();
app.use(cors());
app.use(express.json());

app.use("/api/users/", userRoutes);
app.use("/api/login/", authRoutes);
app.use("/api/baihats", baihatRoutes);
app.use("/api/playlists/", playListRoutes);
// app.use("/api/", searchRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
