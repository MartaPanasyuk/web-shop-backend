const express = require("express");
const cors = require("cors");
const productRouter = require("./routers/products");

const PORT = 4000;

const app = express();

// Middelwares
app.use(express.json());
app.use(cors());

// Routers
app.use("/products", productRouter);

app.get("/", async (req, res) => {
  try {
    res.send("Hello World");
  } catch (e) {
    console.log(e.message);
  }
});

app.listen(PORT, () => console.log("Server started on port:", PORT));
