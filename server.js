const express = require("express");
const ProductRoute = require("./routes/productRoute");
const UserRoute = require("./routes/userRoute");
const dotenv = require("dotenv");
const connectdb = require("./config/db");
const cors = require("cors");

dotenv.config();
connectdb();

const app = express();

/* 🔑 CORS — allow frontend from anywhere (for now) */
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// IMPORTANT: handle preflight
app.options("*", cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", ProductRoute);
app.use("/api", UserRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
