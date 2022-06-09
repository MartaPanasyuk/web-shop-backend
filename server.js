const express = require("express");
const cors = require("cors");
const productRouter = require("./routers/products");
const categoryRouter = require("./routers/categories");
const userRouter = require("./routers/users");
const reviewRouter = require("./routers/reviews");

const PORT = 4000;

const app = express();

// Middelwares
app.use(cors());
app.use(express.json());

// Routers
app.use("/products", productRouter);
app.use("/categories", categoryRouter);
app.use("/user", userRouter);
app.use("/reviews", reviewRouter);

app.get("/", async (req, res) => {
  try {
    res.send("Hello World");
  } catch (e) {
    console.log(e.message);
  }
});

app.listen(PORT, () => console.log("Server started on port:", PORT));
