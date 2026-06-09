const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const sequelize = require("./config/database");
require("./models/userModel"); // Import all models

const authRoutes = require("./routes/authRoutes");

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

sequelize
  .authenticate()
  .then(() => {
    console.log("PostgreSQL connected");

    return sequelize.sync();
  })
  .then(() => {
    console.log("Database synced");

    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });

// Optional 404 handler
app.all("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on the server`,
  });
});