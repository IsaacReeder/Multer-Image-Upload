const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => res.json({ msg: "app running" }));

app.use(express.static("uploads"));

app.use("/api/images", require("./routes/api/images.js"));

const PORT = 3200;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
