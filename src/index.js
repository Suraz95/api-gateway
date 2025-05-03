const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const compileRoutes = require("./routes/compileRoutes");
const config = require("./config");

const app = express();

// CORS Configuration
app.use(
  cors({
    origin: config.corsOrigin || "http://localhost:5173", // Set the allowed origin (frontend URL)
    credentials: true, // Allow credentials (cookies, JWT, etc.)
  })
);

app.use(express.json()); // To parse incoming requests with JSON payloads

// Routes
app.use("/auth", authRoutes); // Auth routes
app.use("/compile", compileRoutes); // Compile routes
app.get("/", (req, res) => {
  res.send("hello-this is from api gate way");
});
// Start the server
app.listen(config.port, () => {
  console.log(`API Gateway running at http://localhost:${config.port}`);
});
