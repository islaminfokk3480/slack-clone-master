import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

const startServer = async () => {
  try {
    const conn = await connectDB();
    console.log("✅ MongoDB connected successfully:", conn.connection.host);

    app.listen(ENV.PORT, () => {
      console.log("🚀 Server running on", ENV.PORT);
    });
  } catch (err) {
    console.log("❌ Failed to connect to MongoDB", err.message);
  }
};

startServer();
